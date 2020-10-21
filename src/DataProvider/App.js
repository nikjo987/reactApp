import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "../common/navbar";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 1, name: "first", liked: false },
      { id: 2, value: 2, name: "second", liked: true },
      { id: 3, value: 3, name: "third", liked: false },
      { id: 4, value: 4, name: "fourth", liked: false }
    ]
  };
  render() {
    return (
      <div>
        <Navbar
          totalCount={this.handleTotalCounts}
          onReset={this.handleReset}
        />
        <main className="container">
          <Counters
            counters={this.state.counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onLiked={this.handleLike}
          />
        </main>
      </div>
    );
  }

  handleIncrement = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({ counter: counters });
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.counter];
      const index = counters.indexOf(counter);
      counters[index].value -= 1;
      this.setState({ counter: counters });
    }
  };

  handleDelete = counter => {
    let counters = [...this.state.counter.filter(count => count !== counter)];
    this.setState({ counter: counters });
  };

  handleTotalCounts = () => {
    return this.state.counter.filter(count => count.value > 0).length;
  };

  handleReset = () => {
    const counterVar = [...this.state.counter];
    counterVar.map(counter => (counter.value = 0));
    this.setState({
      counters: counterVar
    });
  };

  handleLike = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index].liked = !counters[index].liked;
    this.setState({ counter: counters });
  };
}

export default App;
