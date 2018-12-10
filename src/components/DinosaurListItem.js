import React from 'react';
import Request from '../helpers/request'
const DinosaurListItem = ({dino, handleDelete})=> {

if(!dino) return null;


function deleteDinoSelected(){
  handleDelete(dino.id)
}

return(
  <>
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
        <img src = {dino.dinoImage}/>
      </td>
      <td>
        {dino.paddock.name}
      </td>
      <td>
        <button onClick = {deleteDinoSelected}>DELETE</button>
      </td>
    </>
)


}

export default DinosaurListItem;
