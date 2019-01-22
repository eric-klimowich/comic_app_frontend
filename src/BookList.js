import React, { Component } from 'react'
import ComicList from './ComicList'

class BookList extends Component {

  state = {
    clickedBookId: null,
    filteredBookComics: []
  }

  clickedBook = (id) => {
    // console.log('clicked')
    // console.log(id)
    const filteredComics = this.props.comics.filter(comic => comic.book_id === id)
    this.setState({
      filteredBookComics: filteredComics
    })
  }

  render() {
    // console.log('BookList props: ', this.props)
    // console.log('BookList state: ', this.state)
    return (
      <div>
        {this.props.filteredBooks.map(book => {
          return (
            <div key={book.id} onClick={() => this.clickedBook(book.id)}>
              <img className="book-covers" src={book.img_url} alt={book.title}/>
              <span className="white-text">{book.title}</span>
            </div>
          )
        })}
        <ComicList
          clickedBookId={this.state.clickedBookId}
          comics={this.state.filteredBookComics}
          changeButtonText={this.props.changeButtonText}
          changeComicsArray={this.props.changeComicsArray}
        />
      </div>
    )
  }

}

export default BookList

// <ul className="books-list">
// {this.props.filteredBooks.map(book => <li key={book.id} value={book.id} onClick={this.clickedBook} >{book.title}</li>)}
// </ul>
