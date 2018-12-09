import React, {Component} from 'react';
import Request from '../helpers/request.js';

class DisplayContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      maxVisitors: 5,
      page: null,
      dinosaurs: {},
      paddocks: {},
      visitors: {},
      paddock:{}//wouldn't actually be here
    }
    this.getDinosaurs = this.getDinosaurs.bind(this);
    this.getPaddocks = this.getPaddocks.bind(this);
    this.getVisitors = this.getVisitors.bind(this);
    this.getPaddock = this.getPaddock.bind(this);
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
    this.getVisitors();
    this.getPaddock();
  }

  render(){
      return <p>Display Container says hello</p>
  }

////
}

export default DisplayContainer;
