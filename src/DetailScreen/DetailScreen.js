import React from 'react'
import SearchContext from '../SearchContext'

export default class DetailScreen extends React.Component {

  static contextType = SearchContext

  findResult = (resultList) =>{
    return resultList.find(result => 
      result.id === this.props.match.params.selected
      )
  }
  //if else statements matching this.props.match.params.search
  //return JSX for each different type with appropriate attributes
  //should be done in the render function

  // renderResultAttributes = (resultItem, searchParam) => {
  //   if(searchParam === 'people') {
  //     return (
  //       <div className="results-wrapper">
  //       <h1>{resultItem.name}</h1>
  //       <ul>
  //         <li>Height: {resultItem.height + 'cm' || 'Unknown'}</li>
  //         <li>Mass: {resultItem.mass + 'kg' || 'Unknown'}</li>
  //         <li>Hair Color: {resultItem.hair_color || 'Unknown'}</li>
  //         <li>Skin Color: {resultItem.skin_color || 'Unknown'}</li>
  //         <li>Eye Color: {resultItem.eye_color || 'Unknown'}</li>
  //         <li>Birth Year: {resultItem.birth_year || 'Unknown'}</li>
  //         <li>Gender: {resultItem.gender || 'Unknown'}</li>
  //       </ul>
  //     </div>
  //     )
  //   }
  // }

  render() {
    const param = this.props.match.params.search
    const peopleParam = param === 'people'
    console.log(peopleParam)
    const {results} = this.context
    const resultItem = this.findResult(results) || {}

    //const populateResults = this.renderResultAttributes(resultItem, param)
    //console.log("populate: ", populateResults)
    return (
      {peopleParam} && (<div className="results-wrapper">
      <h1>{resultItem.name}</h1>
      <ul>
        <li>Height in cm: {resultItem.height  || 'Unknown'}</li>
        <li>Mass in kg: {resultItem.mass  || 'Unknown'}</li>
        <li>Hair Color: {resultItem.hair_color || 'Unknown'}</li>
        <li>Skin Color: {resultItem.skin_color || 'Unknown'}</li>
        <li>Eye Color: {resultItem.eye_color || 'Unknown'}</li>
        <li>Birth Year: {resultItem.birth_year || 'Unknown'}</li>
        <li>Gender: {resultItem.gender || 'Unknown'}</li>
      </ul> 
      </div>)


    )
  }
}