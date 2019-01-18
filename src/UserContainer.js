import React, {Component} from 'react'
import UserPage from './UserPage'
import LogIn from './LogIn'

class UserContainer extends Component {
  render() {
    return (
      <div>
        <UserPage />
        <LogIn />
      </div>
    )
  }

}

export default UserContainer
