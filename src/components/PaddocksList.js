import React from "react";
import PaddockListItem from './PaddockListItem.js';

const PaddocksList = (props) => {

  if (!props.paddockList) return null;

return (

<>
<table id="table">
<thead>
 <tr>
   <th>Name</th>
   <th>Type</th>
   <th>Max no.</th>
   <th>Dino List</th>
   <th>Fed today?</th>
   <th>Feed</th>
   <th>Activate Paddock</th>
   <th>Deactivate Paddock</th>
 </tr>
</thead>

   <PaddockListItem paddocks = {props.paddockList}/>

 </table>
</>

)
}


export default PaddocksList;
