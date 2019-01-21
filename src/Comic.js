import React from 'react'

const Comic = props => {
  return (
    <div>
    <div className="ui card">
      <div className="content">
        <div className="header">{props.title}</div>
          <div className="content">
            <h4 className="ui sub header">
              Issue: {props.issue_number}
            </h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      <p>Elliot Fu</p> added <p>Jenny Hess</p> to the project
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="extra content">
            <button
              className="ui button"
              onClick={() => props.changeComicsArray(props.id)}
            >
              {props.changeButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Comic
