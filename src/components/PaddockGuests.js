import React from 'react';
import '../containers/displayContainer.css';


const PaddockGuests = (props)=>{
if (!props.paddockInfo._embedded) return <><h2>There are no dinosaurs in this paddock</h2><img src="./images/sadDino.png" alt="logo" height="auto" width="450px"/></>;

const paddockGuests = props.paddockInfo._embedded.dinosaurs.map((dinosaur, index) => {
    return(

    <div className="dinosaur-short" key={index}>
      <p>Name: {dinosaur.name}</p>
      <p>Species: {dinosaur.dinoSpecies}</p>
      <p>Diet: {dinosaur.dinoDietType}</p>
      <img alt="dinosaur-pic" className="dino-larger-thumbnail" src={dinosaur.dinoImage}/>
    </div>
  )
})

      return(
        <>
        <div className="paddock-guests-title">
        <h1 className="paddock-title">JURASSIC GUESTS</h1>
        </div>
        <div className="paddock-wrapper">
        {paddockGuests}
        </div>
        </>
      )


  }

  export default PaddockGuests
