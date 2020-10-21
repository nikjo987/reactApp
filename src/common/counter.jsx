import React, { Component } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <FiMinus
            onClick={this.props.onDecrement}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            size={25}
            className="mr-10"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-2">
          <span style={{ fontSize: 15 }} className={this.getClassName()}>
            {this.props.counter.value}
          </span>
        </div>
        <div className="col-2">
          <FiPlus
            onClick={this.props.onIncrement}
            className="ml-2"
            size={25}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }

  getClassName() {
    let className = "badge m-2 badge-";
    className += this.props.counter.value === 0 ? "warning" : "primary";
    return className;
  }
}

export default Counter;
