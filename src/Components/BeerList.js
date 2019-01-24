import React, { Component } from 'react';
import BeerItem from './BeerItem'

class BeerList extends Component {

  render() {
    let beers=this.props.beers.map(beer=>{
      return <BeerItem  beer={beer} key={beer.id} handleBeer={this.props.handleBeer}/>
    })
    return (
      <div>

      {beers}
      </div>
    );
  }

}

export default BeerList;
