import React from 'react'

export default class DetailSideBar extends React.Component {
  
  goBack = () => {
      this.props.history.push('/')
    }
  render() {

    return (
      <button onClick={() => this.goBack()}>Go Back</button>
    )
  }
}