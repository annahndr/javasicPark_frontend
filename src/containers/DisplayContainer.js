import React, {Component} from 'react';
import Map from '../components/Map';
import PaddockGuests from '../components/PaddockGuests';
import './displayContainer.css';

class DisplayContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className="display-wrapper">
        <div className="map">
        <Map/>
        </div>
        <div className="paddock-info">
        <PaddockGuests/>
        </div>
      </div>
      </>
    )

  }
}

export default DisplayContainer
