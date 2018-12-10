import React from "react";

const PaddockListItem = ({paddock}) => {

  if(!paddock) return null;

   return (

     <>
       <td>
         {paddock.name}
       </td>
       <td>
         {paddock.paddockType}
       </td>
       <td>
         {paddock.maxNoDinosaurs}
       </td>
       <td>
         {paddock.dinosaurs}
       </td>
       <td>
         {paddock.fed.toString()}
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

       </>
   )


  }



export default PaddockListItem;
