import React, {Component} from 'react'
import Nav from './Nav'
import UserProfile from './UserProfile'
import ComicsContainer from './ComicsContainer'
import Logout from './Logout'
import ComicList from './ComicList'

class UserContainer extends Component {
        state = {
          characters: [],
          books: [],
          comics: [],
          likes: [],
          selectedCharacterId: null,
          myComics: []
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
    // console.log(event.target.value)
    this.setState({
      selectedCharacterId: event.target.value
    }/*, () => console.log(this.state.selectedCharacterId)*/)
  }

  pickedComic = (myComic) => {
    // console.log('clicked')
    // console.log('In pickedComic: ', comic.id)
    const isIncluded = this.state.myComics.find(comic => comic.id === parseInt(myComic.id))
    if (!isIncluded) {
      this.setState({
        myComics: [...this.state.myComics, myComic]
      }, () => console.log(this.state.myComics))
    }
  }

  render() {
    // console.log('State in UserContainer: ', this.state)
    // console.log('Props in UserContainer: ', this.props)
    // console.log('Props in UserContainer: ', this.props.currentUser)
    return (
      <div>
        <UserProfile
          currentUser={this.props.currentUser}
          logoutUser={this.props.logoutUser}
        />
        <Nav
          characters={this.state.characters}
          getSelectedCharacter={this.getSelectedCharacter}
        />
        <Logout
          logoutUser={this.props.logoutUser}
        />
        <ComicsContainer
          books={this.state.books}
          comics={this.state.comics}
          pickedComic={this.pickedComic}
          selectedCharacterId={this.state.selectedCharacterId}
        />
        <ComicList
          comics={this.state.myComics}
          pickedComic={this.pickedComic}
        />
      </div>
    )
  }

}

export default UserContainer
