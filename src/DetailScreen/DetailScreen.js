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
    const {results} = this.context
    const resultItem = this.findResult(results) || {}

    //const populateResults = this.renderResultAttributes(resultItem, param)
    //console.log("populate: ", populateResults)
    return (
      <div className="results-wrapper">
      
      {param === 'people' && (
        <>
          <h2>{resultItem.name}</h2>
          <ul>
            <li>Height <span className="small-text">in cm</span>: {resultItem.height  || 'Unknown'}</li>
            <li>Mass <span className="small-text">in kg</span>: {resultItem.mass  || 'Unknown'}</li>
            <li>Hair Color: {resultItem.hair_color || 'Unknown'}</li>
            <li>Skin Color: {resultItem.skin_color || 'Unknown'}</li>
            <li>Eye Color: {resultItem.eye_color || 'Unknown'}</li>
            <li>Birth Year: {resultItem.birth_year || 'Unknown'}</li>
            <li>Gender: {resultItem.gender || 'Unknown'}</li>
          </ul> 
        </>
      )}

      {param === 'films' && (
        <>
          <h2>{resultItem.title}</h2>
          <ul>
            <li>Director: {resultItem.director || 'Unknown'}</li>
            <li>Producer(s): {resultItem.producer || 'Unknown'}</li>
            <li>Release Date: {resultItem.release_date || 'Unknown'}</li>
            <li>Opening Crawl: {resultItem.opening_crawl || 'N/A'}</li>
          </ul>
        </>
      )}

      {param === 'starships' && (
        <>
          <h2>{resultItem.name}</h2>
          <ul>
          <li>Model: {resultItem.model || 'Unknown'}</li>
          <li>Manufacturer: {resultItem.manufacturer || 'Unknown'}</li>
          <li>Cost <span className="small-text">in credits</span>: {resultItem.cost_in_credits || 'Unknown'}</li>
          <li>Hyperdrive Rating: {resultItem.hyperdrive_rating || 'Unknown'}</li>
          <li>Max Speed <span className="small-text">in Atmosphere</span>: {resultItem.max_atmosphering_speed || 'Unknown'}</li>
          <li>Length <span className="small-text">in meters</span>: {resultItem.length || 'Unknown'}</li>
          <li>Minimum Crew: {resultItem.crew || 'Unknown'}</li>
          <li>Passenger Capacity: {resultItem.passengers || 'Unknown'}</li>
          <li>Crew/Passenger Supplies Capacity: {resultItem.consumables || 'Unknown'}</li>
          <li>Cargo Capacity <span className="small-text">in metric tons</span>: {resultItem.cargo_capcity || 'Unknown'}</li>
          </ul>
        </>
      )}

      {param === 'vehicles' && (
        <>
          <h2>{resultItem.name}</h2>
          <ul>
            <li>Model: {resultItem.model || 'Unknown'}</li>
            <li>Manufacturer: {resultItem.manufacturer || 'Unknown'}</li>
            <li>Cost in credits: {resultItem.cost_in_credits || 'Unknown'}</li>
            <li>Max Speed <span className="small-text">in Atmosphere</span>: {resultItem.max_atmosphering_speed || 'Unknown'}</li>
            <li>Length <span className="small-text">in meters</span>: {resultItem.length || 'Unknown'}</li>
            <li>Minimum Crew: {resultItem.crew || 'Unknown'}</li>
            <li>Passenger Capacity: {resultItem.passengers || 'Unknown'}</li>
            <li>Crew/Passenger Supplies Capacity: {resultItem.consumables || 'Unknown'}</li>
            <li>Cargo Capacity <span className="small-text">in metric tons</span>: {resultItem.cargo_capcity || 'Unknown'}</li>
          </ul>
        </>
      )}

      {param === 'species' && (
        <>
          <h2>{resultItem.name}</h2>
          <ul>
            <li>Designation: {resultItem.designation || 'Unknown'}</li>
            <li>Classification: {resultItem.classification || 'Unknown'}</li>
            <li>Language: {resultItem.language || 'Unknown'}</li>
            <li>Average Height <span className="small-text">in cm</span>: {resultItem.average_height || 'Unknown'}</li>
            <li>Average Lifespan <span className="small-text">in standard years</span>: {resultItem.average_lifespan || 'Unknown'}</li>
            <li>Skin Color(s): {resultItem.skin_colors || 'Unknown'}</li>
            <li>Eye Color(s): {resultItem.eye_colors || 'Unknown'}</li>
            <li>Hair Color(s): {resultItem.hair_colors || 'Unknown'}</li>
          </ul>
        </>
      )}

      {param === 'planets' && (
        <>
          <h2>{resultItem.name}</h2>
          <ul>
            <li>Diameter: {resultItem.diameter || 'Unknown'}</li>
            <li>Gravity: {resultItem.gravity || 'Unknown'}</li>
            <li>Orbital Period <span className="small-text">in standard days</span>: {resultItem.orbital_period || 'Unknown'}</li>
            <li>Rotation Period <span className="small-text">in standard hours</span>: {resultItem.rotation_period || 'Unknown'}</li>
            <li>Climate: {resultItem.climate || 'Unknown'}</li>
            <li>Terrain: {resultItem.terrain || 'Unknown'}</li>
            <li>Surface Water <span className="small-text">as a percentage</span>: {resultItem.model || 'Unknown'}</li>
            <li>Population: {resultItem.population || 'Unknown'}</li>
          </ul>
        </>
      )}


      </div>


    )
  }
}