import React, { Component } from "react";
import { connect } from "react-redux";
import "./../../css/style.css";
import Ticket from "./Ticket";

class ListTick extends Component {

  renderListTicket = () => {
    const {listTicket} = this.props;
    return listTicket.map((ticket,index)=>{
      return (
          <Ticket infor={ticket} key={index}/>
      )
    })

  }
  render() {
    return (
      <div className="listTicket">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
              <th>Price of ticket</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListTicket()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTicket : state.reducerMovie.listTicket 
  }
}

export default connect(mapStateToProps,null)(ListTick)