import React from 'react'
import NavSearchOptions from '../NavSearchOptions/NavSearchOptions'

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