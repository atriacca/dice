import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
    }
}
handleChange = (e) => {
    this.setState({ name: e.target.value })
}
onSubmit = (e) => {
    e.preventDefault()
    this.setState({ name: "" })
    // e.target.focus()
}
  render() {
      const styles = {
      }
    return (
      <div>
          <h1>Enter your name</h1>
          <form onSubmit={this.onSubmit} style={styles}>
            <input value={this.state.name} onChange={this.handleChange} />
            <button onClick={this.roll}>Click</button>
          </form>
      </div>
    );
  }
}

export default Form;