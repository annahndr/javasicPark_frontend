import React, {Component} from 'react';
import HeaderNav_homeContainer from '../components/headerNav_homeContainer.js'
import DisplayContainer from './DisplayContainer';
import Request from '../helpers/request.js';


class HomeContainer extends Component {
constructor() {
  super();
  this.state = {
    maxVisitors: 5,
    dinosaurs: {},
    paddocks: {},
    visitors: {},
    paddock:{}//wouldn't actually be here
  }
  this.getDinosaurs = this.getDinosaurs.bind(this);
  this.getPaddocks = this.getPaddocks.bind(this);
  this.getVisitors = this.getVisitors.bind(this);
  this.getPaddock = this.getPaddock.bind(this);
  this.getNumberOfVisitors = this.getNumberOfVisitors.bind(this)
}
getNumberOfVisitors(){
  return this.visitors.length;
}
getPaddock(){
    let request = new Request()
    request.get('/api/paddocks/1')
    .then(data => {this.setState({paddock: data})
    console.log(this.state.paddock);
  })
}
  getDinosaurs(){
    let request = new Request()
    request.get('/api/dinosaurs')
    .then(data => {this.setState({dinosaurs: data._embedded.dinosaurs})
    console.log(this.state.dinosaurs);
  })

  }

  getPaddocks(){
    let request = new Request()
    request.get('/api/paddocks')
    .then(data => {this.setState({paddocks: data._embedded.paddocks})
    console.log(this.state.paddocks);
  })

  }

  getVisitors(){
    let request = new Request()
    request.get('/api/visitors')
    .then(data => {this.setState({visitors: data._embedded.visitors})
    console.log(this.state.visitors);
  })
  }

  componentDidMount() {
    this.getDinosaurs();
    this.getPaddocks();
    this.getVisitors()
    this.getPaddock();

  }

render(){
    console.log("render started");
  return (
    <>
      <HeaderNav_homeContainer/>
      <DisplayContainer paddock = {this.state.paddock} dinosaurs = {this.state.dinosaurs} paddocks = {this.state.paddocks}/>
    </>

    )
  }

}
 export default HomeContainer;
