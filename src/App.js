import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'
import LogIn from './LogIn'

class App extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({users}))
  }

  handleSubmit = (event, newUser) => {
    event.preventDefault()
    console.log(newUser)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accetp: 'application/json'
      },
      body: JSON.stringify({
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        fav_char: newUser.favChar,
        fav_team: newUser.favTeam
      })
    })
      .then(r => r.json())
      .then(addedUser => {
        // console.log(addedUser)
        this.setState({
          users: [...this.state.users, addedUser]
        }, () => console.log(this.state.users))
      })

  }

  render() {
    console.log('In App: ', this.state)
    return (
      <div>
        <UserContainer
          users={this.state.users}
        />
        <LogIn
          users={this.state.users}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }

}

export default App;
