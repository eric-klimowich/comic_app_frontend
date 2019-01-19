import React from 'react'
import NewUser from './NewUser'
import ReturningUser from './ReturningUser'

const LogIn = props => {

  return (
    <div>
      <NewUser
        handleSubmit={props.handleSubmit}
      />
      <ReturningUser
        users={props.users}
      />
    </div>
  )

}

export default LogIn
