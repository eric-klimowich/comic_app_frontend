import React, { Component } from 'react'

class NewUser extends Component {

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    favChar: '',
    favTeam: ''
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.submitNewUser(event, this.state)} >
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          placeholder="Password..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="favChar"
          value={this.state.favChar}
          placeholder="Favorite Character..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="favTeam"
          value={this.state.favTeam}
          placeholder="Favorite Team..."
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }

}

export default NewUser
