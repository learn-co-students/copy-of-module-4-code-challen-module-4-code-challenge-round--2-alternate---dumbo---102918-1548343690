import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerList from '../Components/BeerList'

class BeerContainer extends Component {

  state={
    beers: [],
    beer: {},
    search: [],
    searchTerm: ''
  }

  componentDidMount(){
  fetch("http://localhost:3001/beers")
  .then(res=>res.json())
  .then(beers=>{
    this.setState({
      beers: beers,
      search: beers

    })
  })
}

  handleBeer=(beer)=>{
    this.setState({
      beer: beer
    })
  }

  searchBeer=(e)=>{
    e.preventDefault()
    let newArr=[...this.state.search].filter(beer=>{
      return beer.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      searchTerm: e.target.value,
      beers: newArr
    })

  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} searchBeer={this.searchBeer}/>
        <br />
        <BeerList  beers={this.state.beers} handleBeer={this.handleBeer}/>
        <BeerDetail beer={this.state.beer}/>
      </div>
    );
  }
}

export default BeerContainer;
