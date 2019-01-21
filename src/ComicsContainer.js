import React, {Component} from 'react'
import BookList from './BookList'

class ComicsContainer extends Component {

  render() {
    const filteredBooks = this.props.books.filter(book => book.character_id === parseInt(this.props.selectedCharacterId))
    // console.log('In ComicsContainer: ', this.props)
    // console.log('In ComicsContainer: ', filteredBooks)
    return (
      <BookList
        filteredBooks={filteredBooks}
        comics={this.props.comics}
        changeButtonText={this.props.changeButtonText}
        changeComicsArray={this.props.changeComicsArray}
      />
    )
  }

}

export default ComicsContainer
