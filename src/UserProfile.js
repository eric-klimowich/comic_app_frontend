import React from 'react'

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`
  return fullName
}

function renderUserProfile(props) {
  if (props.currentUser) {
    return (
      <div className="ui card">
        <div className="image">
          <img src={props.currentUser.img_url} alt="user's selected profile"/>
        </div>
        <div className="content">
          <p className="header">
            {fullName(props.currentUser.first_name, props.currentUser.last_name)}
          </p>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            <p>
              <strong>
                My Hero:
              </strong>
              {props.currentUser.fav_char}
            </p>
            <p>
              <strong>
                My Team:
              </strong>
              {props.currentUser.fav_team}
            </p>
          </div>
        </div>
        <div className="extra content">
          <p>
            <i className="book icon"></i>
              Number of comics reading: {props.myComics.length}
          </p>
        </div>
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
