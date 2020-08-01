import React from 'react'
import SearchContext from '../SearchContext'
import ResultItem from '../ResultItem/ResultItem'
import './ResultsList.css'

export default class ResultsList extends React.Component {

  static contextType = SearchContext

  render() {
    
    const { results, path, } = this.context
    let resultItems = []
    if(path !== 'films') {
      resultItems = results.map((result, i) => <ResultItem key={i} id={result.id}name={result.name}/>)
    } else {
      resultItems = results.map((result, i) => <ResultItem key={i} id={result.id}name={result.title}/>)
    }
    
    return (
      <ul className="results-list">
        {resultItems}
      </ul>
    )
  }
}