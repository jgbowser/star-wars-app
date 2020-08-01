import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchContext from '../SearchContext'
import './NavSearchOptions.css'

export default class NavSearchOptions extends React.Component {

  static contextType = SearchContext

  render() {
    const {resetResults, setPath, setSearchExecuted } = this.context
    return (
      <div className="search-options-wrapper">
         
          <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('people')
              setSearchExecuted(false)
              }}
          >
           <NavLink to='/people'> <h4>People</h4></NavLink>
          </div>
        
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('films')
              setSearchExecuted(false)
              }}
          >
            <NavLink to='/films'><h4>Films</h4></NavLink>
          </div>
        
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('starships')
              setSearchExecuted(false)
              }}
          >
            <NavLink to='/starships'><h4>Starships</h4></NavLink>
          </div>
         
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('vehicles')
              setSearchExecuted(false)
              }}
          >
            <NavLink to='./vehicles'><h4>Vehicles</h4></NavLink>
          </div>
         
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('species')
              setSearchExecuted(false)
              }}
          >
           <NavLink to='./species'> <h4>Species</h4></NavLink>
          </div>
         
        <div 
            className="search-option-link" 
            onClick={() => {
              resetResults()
              setPath('planets')
              setSearchExecuted(false)
              }}
          >
            <NavLink to='./planets'><h4>Planets</h4></NavLink>
          </div>
        
      </div>
    )
  }
}