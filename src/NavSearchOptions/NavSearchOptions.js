import React from 'react'
import { Link } from 'react-router-dom'
import SearchContext from '../SearchContext'

export default class NavSearchOptions extends React.Component {

  static contextType = SearchContext

  render() {
    const {resetResults, setPath, setSearchExecuted } = this.context
    return (
      <div className="search-options-wrapper">
        <Link to='/'> 
          <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('people')
              setSearchExecuted(false)
              }}
          >
            <h4>People</h4>
          </div>
        </Link>
        <Link to='/films'> 
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('films')
              setSearchExecuted(false)
              }}
          >
            <h4>Films</h4>
          </div>
        </Link>
        <Link to='/starships'> 
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('starships')
              setSearchExecuted(false)
              }}
          >
            <h4>Starships</h4>
          </div>
        </Link>
        <Link to='./vehicles'> 
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('vehicles')
              setSearchExecuted(false)
              }}
          >
            <h4>Vehicles</h4>
          </div>
        </Link>
        <Link to='./species'> 
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('species')
              setSearchExecuted(false)
              }}
          >
            <h4>Species</h4>
          </div>
        </Link>
        <Link to='./planets'> 
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('planets')
              setSearchExecuted(false)
              }}
          >
            <h4>Planets</h4>
          </div>
        </Link>
      </div>
    )
  }
}