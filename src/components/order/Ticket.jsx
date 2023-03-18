import React, { Component } from "react";
import { connect } from "react-redux";

class Ticket extends Component {
  render() {
    const {infor,removeTicket} = this.props
    return (
      <tr>
        <td>{infor.name}</td>
        <td>{infor.numberSeats}</td>
        <td>{infor.seats.toString()}</td>
        <td>{infor.price}</td>
        <td>{infor.total}</td>
        <td>
          <button className="btn">
            <i className="fa-solid fa-trash text-danger-emphasis" onClick={ () => removeTicket(infor)}></i>
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    removeTicket : (ticket) => {
      const action = {
        type : "REMOVE_TICKET",
        ticket,
      }
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(Ticket);