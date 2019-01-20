import React from 'react'

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`
  return fullName
}

const ReturningUser = props => {
  // console.log('In ReturningUser: ', props)
  return (
    <form>
      <select onChange={props.chooseReturningUser}>
        <option>Users:</option>
        {props.users.map(user => <option key={user.id} value={user.id} >{fullName(user.first_name, user.last_name)}</option>)}
      </select>
    </form>
  )
}

export default ReturningUser
