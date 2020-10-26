import React, { Component } from "react";

class Input extends Component {
  render() {
    const { label, type, id, min, step, max, onChange, value } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={id}
          onChange={onChange}
          min={min === undefined ? null : 0}
          step={step ? step : null}
          max={max ? max : null}
          value={value}
        />
      </div>
    );
  }
}
export default Input;
