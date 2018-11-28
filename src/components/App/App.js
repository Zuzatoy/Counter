import React, { Component } from 'react'

import { Message } from '../Message';
import { Button } from '../Button';
import { Counter } from '../Counter'

export class App extends Component {
  state = {
    count: 0,
    maxNumber: 10,
    minNumber: 0,
    message: ''
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

  render () {
    const { count, maxNumber, minNumber, message } = this.state;

    return (
          <div>
            <Button 
              maxNum={maxNumber}
              minNum={minNumber} 
              actions={[this.decrementCount, 
                        this.resetCount, 
                        this.incrementCount]} 
                      />
            <Message
              message={message}
              />

            <Counter
              counter={count}
              />
          </div>

    )
  }
}
