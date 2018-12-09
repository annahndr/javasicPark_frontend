import React, {Component} from 'react';
import Dinosaurs from './Dinosaurs';

const PaddockGuests = (props)=>{
if (!props.paddockInfo) return null;

const paddockGuests = props.paddockInfo._embedded.dinosaurs.map((dinosaur, index) => {
    return <div className="dinosaur-short">
    <p>{dinosaur.name}</p>
    <p>{dinosaur.DinoSpecies}</p>
    <p>{dinosaur.DinoDietType}</p>
  </div>
})

      return(


        <>
        <div className="paddock-guests-title">
        <h1>Paddocks Inhabitants</h1>
        </div>
        <div className="paddock-wrapper">
        {paddockGuests}
        </div>
        </>
      )


  }

  export default PaddockGuests
