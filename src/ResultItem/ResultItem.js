import React from 'react'
import { Link } from 'react-router-dom'
import SearchContext from '../SearchContext'
import './ResultItem.css'

export default class ResultItem extends React.Component {

  static contextType = SearchContext
  render() {
    const { path } = this.context
    return (
      <li className="result-item">
        <Link to={`/${path}/${this.props.id}`} className='result-item-link'>
    <h4>{this.props.name}</h4>
        </Link>
      </li>
    )
  }
}