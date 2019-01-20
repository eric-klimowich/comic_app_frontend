import React, { Component } from 'react'
import ComicList from './ComicList'

class BookList extends Component {

  state = {
    clickedBookId: null,
    filteredBookComics: []
  }

  clickedBook = (event) => {
    // console.log('clicked')
    // console.log(event.target.value)
    const filteredComics = this.props.comics.filter(comic => comic.book_id === parseInt(event.target.value))
    this.setState({
      filteredBookComics: filteredComics
    })
  }

  render() {
    // console.log('BookList props: ', this.props)
    console.log('BookList state: ', this.state)
    return (
      <div>
        <ul>
          {this.props.filteredBooks.map(book => <li key={book.id} value={book.id} onClick={this.clickedBook} >{book.title}</li>)}
        </ul>
        <ComicList
          clickedBookId={this.state.clickedBookId}
          comics={this.state.filteredBookComics}
          pickedComic={this.props.pickedComic}
        />
      </div>
    )
  }

}

export default BookList
