import React from 'react'
import cuid from 'cuid'
import SearchContext from '../SearchContext'
import ResultsList from '../ResultsList/ResultsList'
import './SearchScreen.css'

export default class SearchScreen extends React.Component {

  state = {
    error: null
  }

  static contextType = SearchContext

  apiQuery = (event) => {
    event.preventDefault()
    const term = event.target.query.value
    const param = this.props.match.params.search
    let url = ''
    if(!param) {
      url = `https://swapi-thinkful.herokuapp.com/api/people/?search=${term}`
    } else {
      url = `https://swapi-thinkful.herokuapp.com/api/${param}/?search=${term}`
    }

    fetch(url)
      .then(resp => {
        if(!resp.ok) {
          throw new Error('Blast! Something went wrong. Repair droids are being dispatched. Please try again.')
        }
        return resp.json()
      })
      .then(data => {
        const dataWithIds = data.results.map(result =>{ return { ...result, id: cuid()}})
        this.context.setResults(dataWithIds)
        this.context.setSearchExecuted(true)
      })
      .catch(err => {
        this.setState({error: err.message})
      })
  }

  render() {
    
    const term = this.props.match.params.search ? this.props.match.params.search : 'people'
    
    return (
      <main>
        <h1>Explore the Jedi Records</h1>
        <form onSubmit={(e) => this.apiQuery(e)}>
          <label htmlFor="query" className="query-label">Search {term} </label>
          <input type="text" name="query" id="query" className="query-input" />
          <button type="submit" className="btn-primary">Search the Holocron</button>
        </form>
        <h3>Results</h3>
        {this.context.results.length === 0 && this.context.searchExecuted ? <div className="try-again">No entries found, try a different search</div> : ''}
        {this.state.error && <div className="error-message">{this.state.error}</div>}
        {this.context.results.length > 0 && <ResultsList />}
      </main>
    )
  }
}