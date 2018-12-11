import React, {Component} from 'react';

const PaddockGuests = (props)=>{
if (!props.paddockInfo._embedded) return <h2>There are no dinosaurs in this paddock</h2>;

const paddockGuests = props.paddockInfo._embedded.dinosaurs.map((dinosaur, index) => {
    return(

    <div className="dinosaur-short" key={index}>
      <p>Name: {dinosaur.name}</p>
      <p>Species: {dinosaur.dinoSpecies}</p>
      <p>Diet: {dinosaur.dinoDietType}</p>
      <img src= {dinosaur.dinoImage}/>
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
