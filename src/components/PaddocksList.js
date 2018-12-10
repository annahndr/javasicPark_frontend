import React from "react";
import PaddockListItem from './PaddockListItem.js';

const PaddocksList = (props) => {

  if (!props.paddockList) return null;

  const paddocks = props.paddockList.map((paddock, index) =>{

    return (

      <>
      <tr key={index} className="table-row">
      <PaddockListItem paddock = {paddock}/>
      </tr>
      </>

    )
}
  )

  return (
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
    <tbody>
      {paddocks}
    </tbody>
    </table>
  )

}


export default PaddocksList;
