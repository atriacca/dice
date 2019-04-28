import React, { Component } from 'react';

class DiceBox extends Component {
    constructor() {
        super()
        this.state = {
            one: 1,
            two: 1,
            three: 1,
            four: 1,
            five: 1
    }
}
roll = () => {
    this.setState((prevState) => {
        let newState = {...prevState}
        for (let key in newState){
            newState[key] = Math.floor(Math.random() * 6 +1)
        }
        return newState
    })
}
  render() {
    return (
      <div>
          <span>Die one: {this.state.one} </span>
          <span>Die two: {this.state.two} </span>
          <span>Die three: {this.state.three} </span>
          <span>Die four: {this.state.four} </span>
          <span>Die five: {this.state.five} </span>
          <span>Total: {this.state.one + this.state.two + this.state.three + this.state.four + this.state.five} </span>
          <button onClick={this.roll}>Roll dice</button>
      </div>
    );
  }
}

export default DiceBox;
