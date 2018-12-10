import React from "react";

const PaddockListItem = (props) => {

  if(!props.paddocks) return null;
console.log(props);

  const paddocks = props.paddocks.map((paddock, index) =>{

   return (

     <tr key={paddock.id} className="single-paddock">

       <td>
         {paddock.name}
       </td>
       <td>
         {paddock.paddockType}
       </td>
       <td>
         {paddock.maxNoOfDinosaurs}
       </td>
       <td>
         {paddock.dinosaurs}
       </td>
       <td>
         {paddock.fed}
       </td>
       <td>
         <button>Feed</button>
       </td>
       <td>
         <button>Activate</button>
       </td>
       <td>
         <button>Deactivate</button>
       </td>

     </tr>
   )
  }
  )
   return  (
     <tbody>
     {paddocks}
     </tbody>
   )
  }



export default PaddockListItem;
