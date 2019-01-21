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
          myComics: [],
          addComics: "Add to My Comics",
          removeComics: "Remove from My Comics"
        }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/characters')
      .then(r => r.json())
      .then(characters => this.setState({ characters }))

    fetch('http://localhost:3000/api/v1/books')
      .then(r => r.json())
      .then(books => this.setState({ books }))

    fetch('http://localhost:3000/api/v1/comics')
      .then(r => r.json())
      .then(comics => this.setState({ comics }))

    fetch('http://localhost:3000/api/v1/likes')
      .then(r => r.json())
      .then(likes => this.setState({ likes }))
  }

  getSelectedCharacter = (event) => {
    // console.log(event.target.value)
    this.setState({
      selectedCharacterId: event.target.value
    }/*, () => console.log(this.state.selectedCharacterId)*/)
  }

  addToMyComics = (id) => {
    // console.log('clicked')
    // console.log('In pickedComic: ', comic.id)
    const comicToAdd = this.state.comics.find(comic => comic.id === id)
    const isIncluded = this.state.myComics.find(comic => comic.id === id)
    if (!isIncluded) {
      this.setState({
        myComics: [...this.state.myComics, comicToAdd]
      }/*, () => console.log(this.state.myComics)*/)
    }
  }


  removeFromMyComics = (id) => {
    // console.log('clicked')
    // console.log(id)
    const myComicsCopy = [...this.state.myComics]
    const updatedMyComics = myComicsCopy.filter(comic => comic.id !== id)
    this.setState({
      myComics: updatedMyComics
    })
  }

  render() {
    // console.log('State in UserContainer: ', this.state)
    // console.log('Props in UserContainer: ', this.props)
    // console.log('Props in UserContainer: ', this.props.currentUser)
    // console.log('State in UserContainer: ', this.state.myComics)
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
          changeButtonText={this.state.addComics}
          changeComicsArray={this.addToMyComics}
          selectedCharacterId={this.state.selectedCharacterId}
        />
        <ComicList
          comics={this.state.myComics}
          changeButtonText={this.state.removeComics}
          changeComicsArray={this.removeFromMyComics}
        />
      </div>
    )
  }

}

export default UserContainer

// filterMyComics = () => {
  //   const myFilteredComics = this.state.comics.filter(comic => comic.clicked === true)
  //   // console.log(myFilteredComics)
  //   this.setState({
    //     myComics: myFilteredComics
    //   })
    // }

    // addToMyComics = (id) => {
      //   // console.log('clicked')
      //   // console.log(id)
      //   const comicsCopy = [...this.state.comics]
      //   const clickedComic = comicsCopy.find(comic => comic.id === id)
      //   // console.log(clickedComic)
      //   clickedComic.clicked = true
      //   // console.log(clickedComic)
      //   this.setState({
        //     comics: comicsCopy
        //   }, this.filterMyComics())
        // }
