import React, { Component } from "react";
import Counter from "./components/counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => {
              this.props.onIncrement(counter);
            }}
            onDecrement={() => {
              this.props.onDecrement(counter);
            }}
            onDelete={() => {
              this.props.onDelete(counter);
            }}
            onLiked={() => {
              this.props.onLiked(counter);
            }}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
