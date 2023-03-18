import React, { Component } from "react";
import "./../../css/style.css";
import { connect } from "react-redux";

class Seat extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { value, handlerChoose, isReserved,startOrder } = this.props;
    const isActive = this.state.isActive;
    if (isReserved) {
      return (
        <input type="button" value={value.soGhe} className="seat reserved" />
      );
    }
    return (
      <input
        type="button"
        value={value.soGhe}
        className={isActive ? "seat checked" : "seat"}
        disabled ={startOrder ? false : true}
        onFocus={() => {
          handlerChoose(value);
        }}
        onClick={this.handleToggle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducerMovie.user,
    startOrder : state.reducerMovie.startOrder

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChoose: (value) => {
      const action = {
        type: "CHOOSE_SEAT",
        value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
