
import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    maxNumber: 10,
    minNumber: 0,
    message: ""
  };

  incrementCount = () => {
    const { count, maxNumber } = this.state;
    const newCount = count < maxNumber ? count + 1 : count;
    const message = newCount === maxNumber ? "You win!" : "Keep going!";

    this.setState({
      count: newCount,
      message
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
      message: ""
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
      message: ""
    });
  };

  render() {
    const { count, maxNumber, minNumber, message } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button 
        disabled={count === maxNumber} onClick={this.incrementCount}>
          +
        </button>
        <button
          disabled={count === 0 || count === maxNumber}
          onClick={count > minNumber ? this.decrementCount : null}
        >
          -
        </button>
        {count === maxNumber && (
          <button onClick={this.resetCount}>Reset counter</button>
        )}
        <h2>{message}</h2>
      </div>
    );
  }
}

export default App;