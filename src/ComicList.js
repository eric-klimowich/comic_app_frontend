import React from 'react'
import Comic from './Comic'

const ComicList = props => {
  // console.log(props.comics)

  // console.log(filteredComics)
  return (
    props.comics.map(comic => <Comic key={comic.id} {...comic} pickedComic={props.pickedComic} />)
  )

}

export default ComicList
