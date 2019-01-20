import React from 'react'

const Comic = props => {
  return (
    <div onClick={() => props.pickedComic(props)}>
      <h1>{props.title}</h1>
      <p>Issue: {props.issue_number}</p>
      <button>X</button>
    </div>

  )

}

export default Comic
