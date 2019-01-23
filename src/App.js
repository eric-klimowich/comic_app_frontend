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
      .then(users => this.setState({ users }))
  }

  submitNewUser = (event, newUser) => {
    event.preventDefault()
    // console.log(newUser)
    // console.log(newUser.username)
    // console.log(newUser.password)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accetp: 'application/json'
      },
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password,
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        img_url: newUser.imgUrl,
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

  submitReturningUser = (event, loginInput) => {
    event.preventDefault()
    // console.log(loginInput)
    const userExists = this.state.users.find(user => user.username === loginInput.username)
    if (userExists) {
      if (loginInput.password === userExists.password) {
        this.setState({
          currentUser: userExists
        })
      }
    }
  }

  logoutUser = () => {
    // console.log('clicked')
    this.setState({
      currentUser: null
    })
  }


  renderWelcomePage = () => {
    if (this.state.currentUser) {
      return (
        <div>
          <h1>Project Title</h1>
          <UserContainer
            users={this.state.users}
            currentUser={this.state.currentUser}
            logoutUser={this.logoutUser}
          />
        </div>
      )
    } else {
      return (
        <div>
          <img className="main-image" src="https://vignette.wikia.nocookie.net/marveldatabase/images/e/e1/The_Marvel_Universe.png/revision/latest?cb=20110513164401" />
          <h1 className="welcome-heading">My Marvel Comics</h1>
          <LogIn
          users={this.state.users}
          submitNewUser={this.submitNewUser}
          chooseReturningUser={this.chooseReturningUser}
          submitReturningUser={this.submitReturningUser}
          />
        </div>

      )
    }
  }

  render() {
    // console.log('In App: ', this.state)
    return (
      this.renderWelcomePage()
    );
  }

}

export default App;

// chooseReturningUser = (event) => {
  //   console.log('changed')
  //   console.log(event.target.value)
  //   const userId = event.target.value
  //   console.log(userId)
  //   console.log(this.state.users)
  //   const chosenUser = this.state.users.find(user => user.id === parseInt(userId))
  //   // console.log(chosenUser)
  //   this.setState({
    //     currentUser: chosenUser
    //   }, () => console.log(this.state.currentUser))
    // }
