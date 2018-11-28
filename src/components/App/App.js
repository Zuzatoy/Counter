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
            <Counter
              count={count}
              />

            <Button 
              title="-" 
              disabled={count === 0 || count === maxNumber}
              onClick={count > minNumber ? this.decrementCount : null}
                      />
              <Button
                title="+"
                disabled={count === maxNumber} 
                onClick={this.incrementCount}
                      />
          
 
              {count === maxNumber && (
                <Button
                  title="Reset"
                  onClick={this.resetCount}
                  />
                )}

            <Message
              message={message}
              />
          </div>

    )
  }
}
