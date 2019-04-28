import React, { Component } from 'react';
import DiceBox from './DiceBox';

class App extends Component {
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
          <span>number one: {this.state.one} </span>
          <span>number two: {this.state.two} </span>
          <span>number three: {this.state.three} </span>
          <span>number four: {this.state.four} </span>
          <span>number five: {this.state.five} </span>
          <button onClick={this.roll}>Roll dice</button>
      </div>
    );
  }
}
export default App;