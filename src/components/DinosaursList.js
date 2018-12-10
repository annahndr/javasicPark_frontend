import React from "react";
import DinosaurListItem from './DinosaurListItem.js';
import Request from '../helpers/request';
import '../containers/displayContainer.css';


const DinosaursList = (props) => {

  if(!props.dinoList) return null;

  function deleteDino(id){
    const url = '/api/dinosaurs' + id;
    let request = new Request();
    request.delete(url).then(() => {
      window.location = '/dinosaurs'
    })
  }



return (
<>
<table id="table">
<thead>
  <tr>
    <th>Name</th><th>Species</th><th>Diet</th><th>Image</th><th>Paddock</th><th>Edit</th>
  </tr>
</thead>

    <DinosaurListItem handleDelete = {deleteDino} dinosaurs = {props.dinoList}/>

  </table>
</>

)
}
export default DinosaursList;
