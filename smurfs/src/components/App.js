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

  render() {
    return (
      <div className="App">
        <form />
      </div>
    );
  }
}

export default App;
