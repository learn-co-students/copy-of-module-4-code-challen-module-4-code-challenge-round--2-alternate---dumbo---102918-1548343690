import React, { Component } from "react";
import Search from "../Components/Search";
import BeerDetail from "../Components/BeerDetail";

class BeerContainer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/beers");
    const data = await response.json();
    this.setState({
      beers: data,
      newBeer: ""
    });
  }

  handleBeer = e => {
    e.preventDefault();

    console.log("I work");

    // let result = this.state.beers.filter(beer => beer.id === e.target.id);
    // console.log(result);

    this.state.beers.filter(beer => {
      if (beer.id === e.target.id) {
        this.setState({
          newBeer: beer
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Search />
        <ul className="container" />
        {this.state.beers.map(beer => (
          <li id={beer.id} key={beer.id} onClick={this.handleBeer}>
            {beer.name}
          </li>
        ))}
        <BeerDetail beers={this.state.newBeer} />
      </div>
    );
  }
}

export default BeerContainer;
