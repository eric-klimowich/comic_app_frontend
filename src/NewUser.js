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
        <div className="ui labeled input">
          <div className="ui blue label">
            Username:
          </div>
          <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="enter username..."
          onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Password:
          </div>
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="enter password..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            First Name:
          </div>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="enter first name..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Last Name:
          </div>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="enter last name..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Favorite Hero:
          </div>
          <input
            type="text"
            name="favChar"
            value={this.state.favChar}
            placeholder="enter favorite hero..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Favorite Team:
          </div>
          <input
            type="text"
            name="favTeam"
            value={this.state.favTeam}
            placeholder="enter favorite team..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <input
          className="ui red button"
          type="submit"
        />
      </form>
    )
  }

}

export default NewUser
