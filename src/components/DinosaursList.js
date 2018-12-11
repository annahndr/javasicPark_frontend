import React from "react";
import DinosaurListItem from './DinosaurListItem.js';
import Request from '../helpers/request';
import '../containers/displayContainer.css';
import DinosaurForm from './DinosaurForm'


const DinosaursList = (props) => {
  if(!props.dinoList||!props.paddocks) return null;

  function deleteDino(id){
    const url = '/api/dinosaurs/' + id;
    let request = new Request();
    request.delete(url).then(() => {
      props.getDinosaurs()
      }
    )
  }
  const dinos = props.dinoList.map((dino, index) =>{
return(
      <tr key={dino.id} className="single-dino">

        <DinosaurListItem handleDelete = {deleteDino} dino={dino}/>

      </tr>
    )
  }
)

return (

<>
  <DinosaurForm paddock = {props.paddock} getPaddock = {props.getPaddock} getDinosaurs = {props.getDinosaurs} paddocks = {props.paddocks}/>

  <table id="table">
    <thead>
      <tr>
        <th>Name</th><th>Species</th><th>Diet</th><th>Image</th><th>Paddock</th><th>Edit</th>
      </tr>
    </thead>
      <tbody>

      {dinos}
      </tbody>
  </table>
</>

)
}
export default DinosaursList;
