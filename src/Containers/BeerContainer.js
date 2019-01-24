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
  //  => {
  //   e.preventDefault();
  //   this.setState({
  //     searchBar: e.target.value
  //   });
  // };
  handleClick = myBeer => {
    console.log(myBeer.image_url);
    this.setState({
      beer: myBeer
    });
  };
  searchHandler = value => {
    let newArr = [...this.state.filteredArray];
    const another = newArr.filter(beer =>
      beer.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      filteredArray: another
    });
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

  renderEachBeer = () => {
    return this.state.filteredArray.map(beer => (
      <li onClick={() => this.handleClick(beer)} key={beer.name} beer={beer}>
        {beer.name}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        <br />
        <ul className="container">{this.renderEachBeer()}</ul>
        <BeerDetail beer={this.state.beer} />
      </div>
    );
  }
}

export default BeerContainer;
