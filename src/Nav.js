import React from 'react'

const Nav = props => {
  // console.log('In Nav: ', props)
  return (
    <div className="ui grid">
      {props.characters.map(character => {
        return (
          <div key={character.id} onClick={() => props.getSelectedCharacter(character.id)} className="four wide column">
              <div className="white-text">
                <img className="ui medium circular image" src={character.img_url} alt={character.name}/>
                <br />
                <h4>{character.name}</h4>
              </div>
          </div>
        )
      })}
    </div>

  )
}

export default Nav
