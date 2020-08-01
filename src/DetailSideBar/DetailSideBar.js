import React from 'react'
import './DetailSideBar.css'

export default class DetailSideBar extends React.Component {
  
  goBack = () => {
      this.props.history.push('/')
    }
  render() {

    return (
      <div className="detail-sidebar">
        <button className="btn-primary" onClick={() => this.goBack()}>Go Back</button>
      </div>
    )
  }
}