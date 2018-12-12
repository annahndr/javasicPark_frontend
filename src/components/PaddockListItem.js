import React from "react";

const PaddockListItem = ({paddock, handleFeed, handleActivate}) => {

  if(!paddock) return null;

  function onFeed(){
    if(paddock.dinosaurs.length > 0){
      paddock.fed = true
      handleFeed(paddock)
    }
  }

  function onActivate(){
    paddock.activated = true
    handleActivate(paddock)
  }

  function onDeactivate(){
    if(paddock.dinosaurs.length <1){
      paddock.activated = false
      handleActivate(paddock)
    }

  }

  const paddockDinos = paddock.dinosaurs.map((dino, index) => {
    return(
      <>
      {dino + " " + "/" + " " }
      </>
    )
  })

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
      {paddockDinos}
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
