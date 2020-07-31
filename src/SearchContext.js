import React from 'react'

const SearchContext = React.createContext({
  results: [],
  setResults: () => {},
})

export default SearchContext