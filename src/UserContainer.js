import React, {Component} from 'react'
import Nav from './Nav'
import UserProfile from './UserProfile'
import ComicsContainer from './ComicsContainer'

class UserContainer extends Component {
        state = {
          characters: [],
          books: [],
          comics: [],
          likes: [],
        }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/characters')
      .then(r => r.json())
      .then(characters => this.setState({characters}))

    fetch('http://localhost:3000/api/v1/books')
      .then(r => r.json())
      .then(books => this.setState({books}))

    fetch('http://localhost:3000/api/v1/comics')
      .then(r => r.json())
      .then(comics => this.setState({comics}))

    fetch('http://localhost:3000/api/v1/likes')
      .then(r => r.json())
      .then(likes => this.setState({likes}))
  }

  getSelectedCharacter = (event) => {
    console.log(event.target.value)
  }

  render() {
    // console.log('State in UserContainer: ', this.state)
    // console.log('Props in UserContainer: ', this.props)
    // console.log('Props in UserContainer: ', this.props.currentUser)
    return (
      <div>
        <Nav
          characters={this.state.characters}
          getSelectedCharacter={this.getSelectedCharacter}
        />
        <UserProfile currentUser={this.props.currentUser} />
        <ComicsContainer />
      </div>
    )
  }

}

export default UserContainer
