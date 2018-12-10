import React from 'react';
import Request from '../helpers/request'
import '../containers/displayContainer.css';


const DinosaurListItem = (props)=> {

if(!props.dinosaurs) return null;

function deleteDinoSelected(){

  props.deleteDino(props.dinosaurs.id)
}

const dinos = props.dinosaurs.map((dino, index) =>{

  return (

    <tr key={dino.id} className="single-dino">

      <td>
        {dino.name}
      </td>
      <td>
        {dino.dinoSpecies}
      </td>
      <td>
        {dino.dinoDietType}
      </td>
      <td>
        {dino.dinoImage}
      </td>
      <td>
        {dino.paddock.name}
      </td>
      <td>
        <button onClick = {deleteDinoSelected}>DELETE</button>
      </td>

    </tr>
  )
}
)
  return  (
    <tbody>
    {dinos}
    </tbody>
  )
}

export default DinosaurListItem;
