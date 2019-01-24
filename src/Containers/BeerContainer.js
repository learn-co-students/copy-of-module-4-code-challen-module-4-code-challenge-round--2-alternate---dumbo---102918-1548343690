import React, { Component } from "react";
import BeerDetail from '../Components/BeerDetail.js';
import Search from '../Components/Search.js';
import BeerItem from '../Components/BeerItem.js';

class BeerContainer extends Component {
  state ={
    beer: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(data =>
      this.setState({
        beer: data
      })
    )
  }

  infoClickHandler = () => {
    console.log('click');
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <Search />
        <br />
        <ul className="container">
          {
            this.state.beer.map(beer =>
              <BeerItem key={beer.id} beer={beer} onClick={this.InfoClickHandler}/>
            )
          }

        </ul>
        <BeerDetail />
      </div>
    );
  }
}

export default BeerContainer;
