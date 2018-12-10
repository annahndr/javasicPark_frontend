import React, {Component} from 'react';
import Dinosaurs from './Dinosaurs';

const PaddockGuests = (props)=>{
if (!props.paddockInfo._embedded) return null;


const paddockGuests = props.paddockInfo._embedded.dinosaurs.map((dinosaur, index) => {
    return(

    <div className="dinosaur-short" key={index}>
      <p>{dinosaur.name}</p>
      <p>{dinosaur.dinoSpecies}</p>
      <p>{dinosaur.dinoDietType}</p>
    </div>
  )
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
