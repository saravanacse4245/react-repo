import React, { Component } from "react";
import { render } from "react-dom";
 

class eventhandlerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counterToggle: true,
      counterToggleText: "Hide Counter"
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleSimpleEvent() {
    alert("Inside handleSimpleEvent");
  }

  handleToggle() {
    let toggleState = !this.state.counterToggle;
    let toggleText = toggleState ? "Hide Counter" : "Show Counter";
    this.setState({
      counterToggle: toggleState,
      counterToggleText: toggleText
    });
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <div>
          <p>Event Handler</p>
          <button onClick={this.handleSimpleEvent}>Simple Event Handler</button>
          <button onClick={this.handleToggle}>
            {this.state.counterToggleText}
          </button>
        </div>
        {this.state.counterToggle && (
          <div style={{ "margin-top": "50px" }}>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <p>Current Counter : {this.state.counter}</p>
          </div>
        )}
       
      </div>
    );
  }
}

export default eventhandlerpage;
