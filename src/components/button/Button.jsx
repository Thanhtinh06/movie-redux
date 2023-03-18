import React, { Component } from 'react';
import './../../css/style.css';

class Button extends Component {
  render() {
    const {value,handlerClick} = this.props
    return (
      <div>
        <button className='btn-main' onClick={()=> handlerClick()} >{value}</button>
      </div>
    )
  }
}

export default Button