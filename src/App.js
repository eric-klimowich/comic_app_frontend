import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'

class App extends Component {

  componentDidMount() {
    fetch('https://comicvine.gamespot.com/api/characters/?api_key=599175bf3806c80d60d4caf424cf74ed228c92f1&sort=steve', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(r => r.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <UserContainer />
    );
  }
  
}

export default App;
