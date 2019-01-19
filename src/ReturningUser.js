import React from 'react'

const ReturningUser = props => {
  return (
    <form>
      <select>
        <option>Users:</option>
        {props.users.map(user => <option key={user.id} value={user.id} >{user.first_name}</option>)}
      </select>
    </form>
  )
}

export default ReturningUser
