import React, { Component } from 'react';
import './App.css';

import { fetchSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: 0,
    height: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs;
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Age:{' '}
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Height:{' '}
            <input
              type="text"
              name="height"
              placeholder="Height"
              value={this.state.height}
              onChange={this.changeHandler}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
