import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'
// import LogIn from './LogIn'

class App extends Component {

  state = {
    users: [],
    
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({users}))

  //   fetch('http://localhost:3000/api/v1/characters')
  //     .then(r => r.json())
  //     .then(characters => this.setState({characters}))
    
  //   fetch('http://localhost:3000/api/v1/books')
  //     .then(r => r.json())
  //     .then(books => this.setState({books}))
    
  //   fetch('http://localhost:3000/api/v1/comics')
  //     .then(r => r.json())
  //     .then(comics => this.setState({comics}))
    
  //   fetch('http://localhost:3000/api/v1/likes')
  //     .then(r => r.json())
  //     .then(likes => this.setState({likes}))
  }

  render() {
    // console.log('In App: ', this.state)
    return (
      <div>
      <UserContainer users={this.state.users} />
      </div>
    );
  }

}

export default App;
