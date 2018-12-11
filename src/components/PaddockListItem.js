import React from "react";

const PaddockListItem = ({paddock, handleFeed, handleActivate}) => {

  if(!paddock) return null;

  function onFeed(){
    paddock.fed = true
    console.log(paddock);
    handleFeed(paddock)

  }

  function onActivate(){
    paddock.activated = true
    handleActivate(paddock)
  }

  function onDeactivate(){
    if(paddock.getDinoCount() <1){
      paddock.activated = false
      handleActivate(paddock)
    }
    
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
         <button onClick={onActivate}>Activate</button>
       </td>
       <td>
         <button onClick ={onDeactivate}>Deactivate</button>
       </td>

       </>
   )


  }



export default PaddockListItem;
