import React, { Component } from "react";
import "./../../css/style.css";
import { connect } from "react-redux";
import clsx from "clsx";
import { actChooseSeat } from "../duck/action";

class Seat extends Component {

  render() {
    const { value, handlerChoose,chooseSeats } = this.props;
    return (
      <input
        type="button"
        value={value.soGhe}
        className = {clsx('seat',{
          checked : chooseSeats.find((item) => item.soGhe === value.soGhe),
          reserved : value.daDat
        })}
        disabled ={value.daDat}
        onClick={() => {
          handlerChoose(value);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    statusBtnConfirm : state.reducerMovie.statusBtnConfirm,
    chooseSeats : state.reducerMovie.chooseSeats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerChoose: (seat) => {
      dispatch(actChooseSeat(seat));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
