import React from 'react';
import { Route } from 'react-router-dom'
import MainSection from '../MainSection/MainSection'
import NavSection from '../NavSection/NavSection'
import Jumbotron from '../Jumbotron/Jumbotron'
import SearchScreen from '../SearchScreen/SearchScreen'
import SideBar from '../SideBar/SideBar'
import DetailSideBar from '../DetailSideBar/DetailSideBar'
import DetailScreen from '../DetailScreen/DetailScreen'
import SearchContext from '../SearchContext'
import './App.css';

class App extends React.Component {

  state = {
    results: [],
    path: 'people',
    searchExecuted: false,
  }

  resetResults = () => {
    this.setState({
      results: []
    })
  }

  setResults = data => {
    this.setState({
      results: data 
    })
  }

  setPath = (path) => {
    this.setState({
      path
    })
  }

  setSearchExecuted = (bool) => {
    this.setState({
      searchExecuted: bool
    })
  }

  render() {

    const contextValue = {
      results: this.state.results,
      path: this.state.path,
      searchExecuted: this.state.searchExecuted,
      setResults: this.setResults,
      setPath: this.setPath,
      resetResults: this.resetResults,
      setSearchExecuted: this.setSearchExecuted,
    }

    
    return (
      <SearchContext.Provider value={contextValue}>
        <div className="App">
            <Route path={'/'} component={Jumbotron} />
            <NavSection>
              <Route exact path={'/'} component={SideBar} />
              <Route exact path={'/:search'} component={SideBar} />
              <Route exact path={'/:seaerch/:selected'} component={DetailSideBar} />
            </NavSection>
            <MainSection>
              <Route exact path={'/'} component={SearchScreen} />
              <Route exact path={'/:search'} component={SearchScreen} />
              <Route exact path={'/:search/:selected'} component={DetailScreen} />
            </MainSection> 
        </div>
      </SearchContext.Provider>
    );
  }
}

export default App;
