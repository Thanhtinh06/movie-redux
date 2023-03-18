import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../input/Input";
import "./../../css/style.css";


class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRefName = React.createRef();
    this.inputRefSeats = React.createRef();
  }

  handerSubmitEvent = (event) => {
    event.preventDefault();
    const inputValueName = this.inputRefName.current.value;
    const inputValueSeats = this.inputRefSeats.current.value;
    const user = {
      name : inputValueName,
      numberSeats : inputValueSeats
    }
    if(inputValueName !=='' && inputValueSeats !==''){
      this.props.takeInfor(user); // Dispatch the action with the user data
    } else {
      alert('Please enter your name and number of seats');
    }
  }

  render() {
    return (
      <div className="form">
        <h2>Fill The Required Details Below And Select Your Seats</h2>
        <form onSubmit={this.handerSubmitEvent}>
          <Input refName={this.inputRefName} refSeats={this.inputRefSeats}/>
          <button className="btn-main" type="submit">Start Selecting</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    takeInfor : (user) => {
      const action = {
        type: "TAKE_INFOR", 
        user
      };
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(Form);

