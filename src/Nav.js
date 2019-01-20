import React from 'react'

const Nav = props => {
  console.log(props)
  return (
    <form>
      <select onChange={props.getSelectedCharacter}>
        {props.characters.map(character => 
          <option 
          key={character.id} 
        value={character.id} >{character.name}</option>)}
      </select>
    </form>
  )
}

export default Nav
