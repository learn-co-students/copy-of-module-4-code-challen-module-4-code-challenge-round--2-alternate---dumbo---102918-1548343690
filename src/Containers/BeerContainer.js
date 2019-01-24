import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state= {
    beers:[],
    search:""
  }

  componentDidMount = () => {
   fetch('http://localhost:3001/beers')
      .then(response => response.json())
      .then(data => this.setState({ beers: data }));
  }

  showBeers = () => {
    return this.state.beers.map(beer => {
      return <BeerItem beer={beer} key={beer.id} showBeerDetail={this.showBeerDetail}/>
    })
  }

  showBeerDetail = (e,beer) => {
    return <BeerDetail beer={beer}/>
  }

  handleChange= (e) => {
  this.setState({search: e.target.value})
}


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <ul className="container">{this.showBeers()}</ul>
        <ul >{this.showBeerDetail()}</ul>
      </div>
    );
  }
}

export default BeerContainer;
