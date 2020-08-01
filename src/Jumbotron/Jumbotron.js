import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/star-wars-logo.png'
import SearchContext from '../SearchContext'
import './Jumbotron.css'

export default class Jumbotron extends React.Component {
  static contextType = SearchContext
  render() {
    const {resetResults, setSearchExecuted} = this.context
    return (
      <header>
        <Link to='/'><img src={Logo} alt="star wars logo" onClick={() => {
          resetResults() 
          setSearchExecuted(false)}}/></Link>
      </header>
    )
  }
}