import React from 'react'
import NewUser from './NewUser'
import ReturningUser from './ReturningUser'

const LogIn = props => {

  return (
    <div>
      <NewUser
        submitNewUser={props.submitNewUser}
      />
      <ReturningUser
        users={props.users}
        chooseReturningUser={props.chooseReturningUser}
      />
    </div>
  )

}

export default LogIn
