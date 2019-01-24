import React, { Component } from "react";
import Search from '../Components/Search';
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {

  state = {
    beers: [],
    clickedBeer: [],
    input: "",
    filteredBeers: []
  }

  getBeers = () => {
    fetch(`http://localhost:3001/beers`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        beers: data,
        filteredBeers: data
      })
    })
  }

  componentDidMount() {
    this.getBeers();
  }

  clickHandler = (beer) => {
    this.setState({
      clickedBeer : beer
    })
  }

  changeHandler = (value) => {

    if (value === "") {
      this.setState({
        input: value,
        filteredBeers: this.state.beers
      })
    } else {
    let newArr = this.state.filteredBeers.filter(beer => {
      return beer.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      input: value,
      filteredBeers: newArr
    })
  }
  }


  render() {
    return (
      <div>
        <Search
        input = {this.state.input}
        changeHandler = {this.changeHandler}/>
        <br />

        <ul className="container">{this.state.filteredBeers.map(beer => {
          return <BeerItem
          beer = {beer}
          clickHandler = {this.clickHandler}
          />
        })}
        </ul>

        <BeerDetail
        beer = {this.state.clickedBeer}/>
      </div>
    );
  }
}

export default BeerContainer;
