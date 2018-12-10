import React from "react";

const PaddockListItem = ({paddock, handleFeed}) => {

  if(!paddock) return null;

  function onFeed(){
    paddock.fed = true
  
    console.log(paddock);
    handleFeed(paddock, paddock.id)

  }

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
         <button onClick={onFeed}>Feed</button>
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
