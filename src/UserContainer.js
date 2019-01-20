import React, {Component} from 'react'
import Nav from './Nav'
// import UserProfile from './UserProfile'
import ComicsContainer from './ComicsContainer'
// import data from './data'

class UserContainer extends Component {
        state = {
          characters: [],
          books: [],
          comics: [],
          likes: [],
          selectedCharacterId: [],
          filteredBooks: []
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
      console.log("firing", event.target.value)
       
       this.setState({selectedCharacterId: event.target.value})
    }
        
    handleFilter = () => {
      console.log(this.state.selectedCharacterId)
      const filteredBooks = this.state.books.filter(book => {
          return book.character_id === parseInt(this.state.selectedCharacterId)
      } )
          this.setState({filteredBooks})
  }

  render() {
    console.log('State in UserContainer: ', this.state)
    // console.log('Props in UserContainer: ', this.props)
    return (
      <div>
        <Nav
          characters={this.state.characters}
          getSelectedCharacter={this.getSelectedCharacter}
        />
        {/* <UserProfile /> */}
        <ComicsContainer books={this.state.books}  filteredBooks={this.state.filteredBooks} />
       
      </div>
    )
  }

}

export default UserContainer
