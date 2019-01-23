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
      .then(comics => this.setState({
        comics
      }, () => this.fetchMyComics()))

    fetch('http://localhost:3000/api/v1/likes')
      .then(r => r.json())
      .then(likes => this.setState({ likes }))

  }

  fetchMyComics = () => {
    fetch('http://localhost:3000/api/v1/likes')
      .then(r => r.json())
      .then(likes => likes.filter(like => like.user_id === this.props.currentUser.id))
      .then(myLikes => myLikes.map(like => this.state.comics.find(comic => comic.id === like.comic_id)))
      .then(myComics => this.setState({ myComics }))
  }

  getSelectedCharacter = (id) => {
    // console.log(id)
    this.setState({
      selectedCharacterId: id
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
    fetch('http://localhost:3000/api/v1/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        comic_id: id
      })
    })
  }


  removeFromMyComics = (id) => {
    // console.log('clicked')
    // console.log(id)
    const myComicsCopy = [...this.state.myComics]
    const updatedMyComics = myComicsCopy.filter(comic => comic.id !== id)
    this.setState({
      myComics: updatedMyComics
    })
    const likeId = (this.state.likes.find(like => like.comic_id === id)).id
    // console.log(likeId)
    fetch(`http://localhost:3000/api/v1/likes/${likeId}`, {
      method: 'DELETE'
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
          myComics={this.state.myComics}
        />
        <Logout
        logoutUser={this.props.logoutUser}
        />
        <ComicList
        comics={this.state.myComics}
        changeButtonText={this.state.removeComics}
        changeComicsArray={this.removeFromMyComics}
        />
        <Nav
          characters={this.state.characters}
          getSelectedCharacter={this.getSelectedCharacter}
        />
        <ComicsContainer
          books={this.state.books}
          comics={this.state.comics}
          changeButtonText={this.state.addComics}
          changeComicsArray={this.addToMyComics}
          selectedCharacterId={this.state.selectedCharacterId}
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
