import React from "react";
import DinosaurListItem from './DinosaurListItem.js';
import Request from '../helpers/request';
import '../containers/displayContainer.css';


const DinosaursList = (props) => {

  if(!props.dinoList) return null;

  function deleteDino(id){
    const url = '/api/dinosaurs/' + id;
    let request = new Request();
    request.delete(url).then(() => {
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
