import React, { Component } from "react";
import Header from "../header/Header";
import ListSeat from "../listSeat/ListSeat";
import Button from "../button/Button";
import Form from "../form/Form";
import ListTick from "../order/ListTick";
import "./../../css/style.css";
import Footer from "../footer/Footer";
import { connect } from "react-redux";

class Home extends Component {


  render() {
    return (
      <div className="main">
        <Header />
        <div className="container body">
          <Form />
          <ListSeat />
          <div className="screen">
            <p>SCREEN THIS WAY</p>
          </div>
          <div className="btn-confirm"> 
          <Button value={"Confirm Selection"} handlerClick={this.props.confirm} />
          </div>
          <ListTick />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducerMovie.user,
    chooseSeats: state.reducerMovie.chooseSeats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    confirm: () => {
      dispatch({ type: "CONFIRM_SELECTION" });
    },
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);
