import React, { Component } from "react";
import Seat from "../seat/Seat";
import "./../../css/style.css";
import { connect } from "react-redux";

class ListSeat extends Component {
  renderListSeat = () => {
    let {dataSeat} = this.props;
    return dataSeat.map((seat, index) => {
      if (index === 0) {
        return (
          <tr key={index}>
            {seat.danhSachGhe.map((infor, index) => {
              return <th key={index}>{infor.soGhe}</th>;
            })}
          </tr>
        );
      }
      return (
        <tr key={index}>
          <td>{seat.hang}</td>
          {seat.danhSachGhe.map((infor, index) => {
            return (
              <td key={index}>
                <Seat value={infor} isReserved={infor.daDat} />
              </td>
            );
          })}
        </tr>
      );
    });
  };
  render() {
    return (
      <section className="list-seat">
        <div className="container">
          <div className="title">
            <ul className="intro">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox whiteBox">Empty Seat</li>
            </ul>
          </div>
          <div className="choose-seat">
            <p className="start-choose">Please Select your Seats NOW!</p>
            <table>
              <tbody className="show-seat">{this.renderListSeat()}</tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataSeat : state.reducerMovie.listSeat,
  }
}

export default connect(mapStateToProps,null)(ListSeat);