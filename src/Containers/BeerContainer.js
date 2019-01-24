import React, { Component } from "react";
import Search from "../Components/Search";
import BeerDetail from "../Components/BeerDetail";
import BeerItem from "../Components/BeerItem";

class BeerContainer extends Component {
  state = {
    beers: [],
    filteredBeers: [],
    formInput: " ",
    beer: []
  };

  typeInForm = (e, input) => {
    e.preventDefault();
    this.setState({
      formInput: input
    });
    this.filterBeers();
  };

  filterBeers = () => {
    let beerList = [...this.state.beers];
    let filter = beerList.filter(beer =>
      beer.name.includes(this.state.formInput.toUpperCase())
    );
    console.log(filter);
    // let searchTerm = input.toUpperCase;
    // let newBeerList = beerList.map(beer => beer.toUpperCase());
    // console.log(newBeerList, searchTerm);
  };

  handleBeerClicked = (e, newBeer) => {
    e.preventDefault();
    this.setBeerToState(newBeer);
  };

  setBeerToState = newBeer => {
    this.setState({
      beer: newBeer
    });
  };

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(res =>
        this.setState({
          beers: res,
          filteredBeers: res
        })
      );
  }

  render() {
    console.log(this.state.formInput);

    let filteredBeerList = [...this.state.filteredBeers];
    let beerMap = filteredBeerList.map((beer, i) => (
      <BeerItem
        key={i}
        beer={beer}
        handleBeerClicked={this.handleBeerClicked}
      />
    ));
    // console.log(beerMap);
    return (
      <div>
        <Search formInput={this.state.formInput} typeInForm={this.typeInForm} />
        <br />
        <ul className="container">{beerMap}</ul>
        <BeerDetail beer={this.state.beer} />
      </div>
    );
  }
}

export default BeerContainer;
