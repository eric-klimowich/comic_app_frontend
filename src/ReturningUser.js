import React, { Component } from 'react'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event, loginInput) => {
    event.preventDefault()
    console.log(loginInput)
  }

  render() {
    // console.log('In ReturningUser: ', props)
    return (
      <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Enter username..."
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          placeholder="Enter password..."
          onChange={this.handleChange}
        />
        <input
          type="submit"
        />
      </form>
    )
  }

}

export default ReturningUser

// <select onChange={this.props.chooseReturningUser}>
// <option>Users:</option>
// {this.props.users.map(user => <option key={user.id} value={user.id} >{fullName(user.first_name, user.last_name)}</option>)}
// </select>
