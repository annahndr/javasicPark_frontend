import React, {Component} from 'react';
import Request from '../helpers/request.js';
import Map from '../components/Map';
import PaddockGuests from '../components/PaddockGuests';
import './displayContainer.css';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    paddock: {}
  }
  this.onPaddockSelected = this.onPaddockSelected.bind(this)
  }

onPaddockSelected(id){

  let idInt = parseInt(id)
  console.log(idInt);
  const url = '/api/paddocks/'+idInt;
  let request = new Request()
  request.get(url)
  .then(data => {this.setState({paddock: data})
  console.log(this.state.paddock);
})
}
  render(){
    return(
      <>
      <div className="display-wrapper">
        <div className="map">
        <Map onPaddockSelected = {this.onPaddockSelected}/>
        </div>
        <div className="paddock-info">
        <PaddockGuests paddockInfo = {this.state.paddock}/>
        </div>
      </div>
      </>
    )

  }
}

export default DisplayContainer
