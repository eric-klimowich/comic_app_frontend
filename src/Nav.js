import React from 'react'

const Nav = props => {
  return (
    <form>
      <select onChange={props.getSelectedCharacter}>
        <option>Characters:</option>
        {props.characters.map(character => <option key={character.id} value={character.id} >{character.name}</option>)}
      </select>
    </form>
  )
}

export default Nav
