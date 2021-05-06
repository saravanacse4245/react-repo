import React, { Component } from 'react';
import { render } from 'react-dom';

class signuppage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('a name was subbed: ' + this.state.value);
    event.preventDefault();
  }

  render() {
 
    return(
 
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
 
    );
  }
}
export default signuppage;