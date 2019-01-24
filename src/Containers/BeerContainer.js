import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state={
    beers: [],
    beer: {},
    filteredArr:[],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3001/beers")
    .then(res=> res.json())
    .then(data =>
    this.setState({
      beers: data,
      filteredArr:data
    }))
  }

  handleClick =(e, obj) => {
    this.setState({
      beer: obj
    })
  }

handleSearch = e =>{
  let term = e.target.value.toLowerCase()
  let newArr = [...this.state.beers].filter(beer => beer.name.toLowerCase().includes(term))
  this.setState({
    filteredArr: newArr,
    searchTerm: e.target.value
  })
}

  render() {

    let list =this.state.filteredArr.map(beer => <BeerItem beer={beer} handleClick={this.handleClick} key={beer.name}/>)
    return (
      <div>
        <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
        <br />
        <ul className="container">{list}</ul>
        {this.state.beer? <BeerDetail beer={this.state.beer}/> : null }
      </div>
    );
  }
}

export default BeerContainer;
