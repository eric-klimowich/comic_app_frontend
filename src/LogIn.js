import React, { Component } from 'react'
import NewUser from './NewUser'
import ReturningUser from './ReturningUser'

class LogIn extends Component {

  state = {
    loginChoice: ''
  }

  handleClick = (event) => {
    // console.log(event.target.value)
    this.setState({
      loginChoice: event.target.value
    })
  }

  renderLoginComponent = (choice) => {
    if (choice === "signup") {
      return (
        <NewUser
          submitNewUser={this.props.submitNewUser}
        />
      )
    }
    if (choice === "login") {
      return (
        <ReturningUser
          users={this.props.users}
          chooseReturningUser={this.props.chooseReturningUser}
          submitReturningUser={this.props.submitReturningUser}
        />
      )
    }
  }

  render() {
    // console.log('In Login: ', this.state.loginChoice)
    return (
      <div>
        <button
          name="signup"
          value="signup"
          onClick={this.handleClick}
        >
          Sign Up
        </button>
        <button
          name="login"
          value="login"
          onClick={this.handleClick}
        >
          Log In
        </button>
        {this.renderLoginComponent(this.state.loginChoice)}
      </div>
    )
  }


}

export default LogIn
