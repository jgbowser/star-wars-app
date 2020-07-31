import React from 'react'
import { Link } from 'react-router-dom'

export default class ResultItem extends React.Component {
  render() {
    return (
      <li className="result-item">
        <Link to={`/${this.props.name}`}>
    <h4>{this.props.name}</h4>
        </Link>
      </li>
    )
  }
}