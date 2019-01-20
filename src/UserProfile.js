import React from 'react'

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`
  return fullName
}

function renderUserProfile(props) {
  if (props.currentUser) {
    return (
      <div>
        <h1>{fullName(props.currentUser.first_name, props.currentUser.last_name)}</h1>
        <p>My Hero: {props.currentUser.fav_char}</p>
        <p>My Team: {props.currentUser.fav_team}</p>
      </div>
    )
  }
}

const UserProfile = props => {
  // console.log('In UserProfile: ', props.currentUser)
  return (
    <div>
      <div>{renderUserProfile(props)}</div>
    </div>
  )
}

export default UserProfile
