
import React, { Component } from 'react'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        opened: false
    };
    this.handler = this.handler.bind(this);
  }

  // This method will be sent to the child component
  handler() {
    this.setState({
        opened: !this.state.opened
    });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <div>
        Home Page Content Here.............................!
      </div>
    )
  }
}