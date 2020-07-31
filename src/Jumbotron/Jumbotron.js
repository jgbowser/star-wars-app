import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/star-wars-logo.png'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'><img src={Logo} alt="star wars logo" /></Link>
      </header>
    )
  }
}