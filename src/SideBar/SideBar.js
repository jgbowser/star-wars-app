import React from 'react'
import NavSearchOptions from '../NavSearchOptions/NavSearchOptions'
import './SideBar.css'

export default class SideBar extends React.Component {
  render() {
    return (
      <nav>
        <h2>Search Options</h2>
        <NavSearchOptions />
      </nav>
    )
  }
}