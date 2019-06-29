import React, { Component } from 'react';
import './App.css';

import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs();
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
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Age:{' '}
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Height:{' '}
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.changeHandler}
            />
          </label>
        </form>
        <ul>
          {this.props.smurfs.map(smurf => (
            <li key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
