import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'
import LogIn from './LogIn'

class App extends Component {

  state = {
    users: [],
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({users}))
  }

  submitNewUser = (event, newUser) => {
    event.preventDefault()
    // console.log(newUser)
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
          users: [...this.state.users, addedUser],
          currentUser: addedUser
        }/*, () => console.log(this.state.users)*/)
      })
  }

  chooseReturningUser = (event) => {
    // console.log('changed')
    // console.log(event.target.value)
    const userId = event.target.value
    console.log(userId)
    console.log(this.state.users)
    const chosenUser = this.state.users.find(user => user.id === parseInt(userId))
    // console.log(chosenUser)
    this.setState({
      currentUser: chosenUser
    }, () => console.log(this.state.currentUser))
  }

  render() {
    // console.log('In App: ', this.state)
    return (
      <div>
        <UserContainer
          users={this.state.users}
          currentUser={this.state.currentUser}
        />
        <LogIn
          users={this.state.users}
          submitNewUser={this.submitNewUser}
          chooseReturningUser={this.chooseReturningUser}
        />
      </div>
    );
  }

}

export default App;
