import React, {Component} from 'react';
import Dinosaurs from './Dinosaurs';

class PaddockGuests extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className="paddock-guests-title">
      <h1>Paddocks Inhabitants</h1>
      </div>
      <div className="paddock-wrapper">
      <Dinosaurs/>
      </div>
      </>
    )

  }
}

export default PaddockGuests
