import React from 'react'

const SearchContext = React.createContext({
  results: [],
  path: '',
  searchExecuted: '',
  setResults: () => {},
  setSearchExecuted: () => {},
  setPath: () => {},
  resetResults: () => {},
})

export default SearchContext