import React from 'react';
import { Route } from 'react-router-dom'
import MainSection from '../MainSection/MainSection'
import NavSection from '../NavSection/NavSection'
import Jumbotron from '../Jumbotron/Jumbotron'
import SearchScreen from '../SearchScreen/SearchScreen'
import SideBar from '../SideBar/SideBar'
import SearchContext from '../SearchContext'
import './App.css';

class App extends React.Component {

  state = {
    results: []
  }

  setResults= data => {
    this.setState({
      results: data 
    })
  }

  render() {
    const contextValue = {
      results: this.state,
      setResults: this.setResults,
    }
    return (
      <SearchContext.Provider value={contextValue}>
        <div className="App">
            <Route path={'/'} component={Jumbotron} />
            <NavSection>
              <Route exact path={'/'} component={SideBar} />
              <Route path={'/:search'} component={SideBar} />
            </NavSection>
            <MainSection>
              <Route exact path={'/'} component={SearchScreen} />
              <Route path={'/:search'} component={SearchScreen} />
            </MainSection> 
        </div>
      </SearchContext.Provider>
    );
  }
}

export default App;
