import React, { Component } from "react";
import BeerDetail from '../Components/BeerDetail'
import Search from '../Components/Search'
import BeerItem from '../Components/BeerItem'
class BeerContainer extends Component {

state = {
  beers: [],
  currentBeer:'',
  searchedName: ''
}


componentDidMount() {
  fetch('http://localhost:3001/beers')
  .then(res => res.json())
  .then(json => this.setState({beers: json}))
}



handleDetail = (beer) => {
  this.setState({currentBeer: beer})
}

handleChange = (e) => {
  this.setState({searchedName: e.target.value, currentBeer: !this.state.currentBeer})
// changing the state of current beer here is just for design purposes, in order BeerDetail to dissapear when you search:)
}
  render() {

let filteredBeers = [...this.state.beers].filter(beer => beer.name.toLowerCase().includes(this.state.searchedName.toLowerCase()))
    return (
      <div>
        <Search handleChange={this.handleChange} value={this.state.searchedName}/>
        <br />
        <ul className="container">{filteredBeers.map(beer => <BeerItem handleDetail={this.handleDetail} key={beer.id} beer={beer}/>)}</ul>
         {(this.state.currentBeer) ? <BeerDetail beer={this.state.currentBeer}/> : null}
      </div>
    );
  }
}

export default BeerContainer;
