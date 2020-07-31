import React from 'react'
import { Link } from 'react-router-dom'

export default class NavSearchOptions extends React.Component {
  render() {
    return (
      <div className="search-options-wrapper">
        <Link to='/'> 
          <div className="search-option-link">
            <h4>All</h4>
          </div>
        </Link>
        <Link to='/people'> 
          <div className="search-option-link">
            <h4>People</h4>
          </div>
        </Link>
        <Link to='/films'> 
          <div className="search-option-link">
            <h4>Films</h4>
          </div>
        </Link>
        <Link to='/starships'> 
          <div className="search-option-link">
            <h4>Starships</h4>
          </div>
        </Link>
        <Link to='./vehicles'> 
          <div className="search-option-link">
            <h4>Vehicles</h4>
          </div>
        </Link>
        <Link to='./species'> 
          <div className="search-option-link">
            <h4>Species</h4>
          </div>
        </Link>
        <Link to='./planets'> 
          <div className="search-option-link">
            <h4>Planets</h4>
          </div>
        </Link>
      </div>
    )
  }
}