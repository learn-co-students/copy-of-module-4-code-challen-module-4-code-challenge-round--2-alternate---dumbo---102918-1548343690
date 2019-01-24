import React, { Component } from "react";
import BeerDetail from '../Components/BeerDetail.js';
import Search from '../Components/Search.js';
import BeerItem from '../Components/BeerItem.js';

class BeerContainer extends Component {
  state ={
    beer: [],
    filteredBeer: [],
    beerDetails: [],
    searchQuery: ""
  }

  componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(data =>
      this.setState({
        beer: data,
        filteredBeer: data
      })
    )
  }

  infoClickHandler = (beer) => {
    this.setState({
      beerDetails: beer
    })
  }

  searchHandler = (event) => {
    // console.log(event.target.value);
    let beerSearch = [...this.state.beer]

    beerSearch = beerSearch.filter(beer =>
      beer.name.toLowerCase().includes(event.target.value)
    )

    this.setState({
      filteredBeer: beerSearch,
      searchQuery: event.target.value
    })

  }

  render() {
    console.log(this.state.beerDetails);
    return (
      <div>
        <Search query={this.state.searchQuery} onChange={this.searchHandler}/>
        <br />
        <ul className="container">
          {
            this.state.filteredBeer.map(beer =>
              <BeerItem key={beer.id} beer={beer} onClick={this.infoClickHandler}/>
            )
          }

        </ul>
        <BeerDetail beer={this.state.beerDetails}/>
      </div>
    );
  }
}

export default BeerContainer;
