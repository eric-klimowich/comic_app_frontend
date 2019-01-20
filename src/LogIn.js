import React from 'react'
import NewUser from './NewUser'
import ReturningUser from './ReturningUser'

  function handleClick(event) {
    console.log(event.target.value)
  }

  function renderLoginComponent(props) {
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

const LogIn = props => {

  return (
    <div>
      <button
        name="signup"
        value="signup"
        onClick={handleClick}
      >
        Sign Up
      </button>
      <button
        name="login"
        value="login"
        onClick={handleClick}
      >
        Log In
      </button>
      <div>{renderLoginComponent(props)}</div>
    </div>
  )

}

export default LogIn
