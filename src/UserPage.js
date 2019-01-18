import React, {Component} from 'react'
import Nav from './Nav'
import ComicsContainer from './ComicsContainer'

class UserPage extends Component {

  render() {
    return (
      <div>
        <Nav />
        <ComicsContainer />
      </div>
    )
  }

}

export default UserPage
