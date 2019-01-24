import React, { Component } from "react";
import BeerDetail from "../Components/BeerDetail";
import Search from "../Components/Search";
class BeerContainer extends Component {
  state = {
    beers: [],
    filteredArray: [],
    searchBar: "",
    beer: ""
  };

  searchHandler = inputValue => {
    console.log(inputValue);
    this.setState({
      searchBar: inputValue
    });
    this.returnByFilter(inputValue);
  };

  returnByFilter = inputValue => {
    if (inputValue !== "") {
      let newArr = [...this.state.beers];
      const tmp = newArr.filter(beer =>
        // beer.name.toLowerCase().includes(this.state.searchBar.toLowerCase())
        beer.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      this.setState({
        filteredArray: tmp
      });
      console.log(newArr);
    }
  };

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          beers: data,
          filteredArray: data
        })
      );
  }

  clickHandler = myBeer => {
    // console.log(myBeer.name);
    this.setState({
      beer: myBeer
    });
  };

  renderEachBeer = () => {
    return this.state.filteredArray.map(beer => (
      <li onClick={() => this.clickHandler(beer)} beer={beer} key={beer.name}>
        {beer.name}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <Search
          // searchBar={this.state.searchBar}
          searchHandler={this.searchHandler}
        />
        <br />
        <ul className="container">{this.renderEachBeer()}</ul>
        <BeerDetail beer={this.state.beer} />
      </div>
    );
  }
}

export default BeerContainer;
