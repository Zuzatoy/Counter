
simple React counter

<!-- export class Button extends React.Component {
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

  render() {
    const { count, maxNumber, minNumber } = this.state;

    return (
        <div >
            <div>
                <Counter/>
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
          <button onClick={this.resetCount}></button>
        )}
        <Message/>

      </div>
        </div>
    );
  }
} -->