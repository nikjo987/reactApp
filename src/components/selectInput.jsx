import React, { Component } from "react";

class SelectInput extends Component {
  render() {
    const { label, id, onChange, value, items } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select
          className="form-control"
          id={id}
          value={value}
          onChange={onChange}
        >
          {items.map(item => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectInput;
