import React from 'react'

const Logout = props => {
  return (
    <button className="ui red button" onClick={props.logoutUser} >Logout</button>
  )
}

export default Logout
