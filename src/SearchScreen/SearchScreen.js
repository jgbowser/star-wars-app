import React from 'react'

export default class SearchScreen extends React.Component {

  apiQuery = (event) => {
    event.preventDefault()
    const term = event.target.query.value
  }

  render() {
    return (
      <main>
        <h1>What do you want to know about?</h1>
        <form onSubmit={(e) => this.apiQuery(e)}>
          <label htmlFor="query">Search {this.props.match.params.search}: </label>
          <input type="text" name="query" id="query" />
          <button type="submit" className="btn-primary">Search the Holocron</button>
        </form>
        <h3>Results</h3>
      </main>
    )
  }
}