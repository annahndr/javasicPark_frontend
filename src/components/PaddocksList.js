import React from "react";
import PaddockListItem from './PaddockListItem.js';
import Request from '../helpers/request'

const PaddocksList = (props) => {

  if (!props.paddockList) return null;

  const paddocks = props.paddockList.map((paddock, index) =>{

    return (

      <>
      <tr key={index} className="table-row">
      <PaddockListItem paddock = {paddock} handleFeed = {handleFeed}/>
      </tr>
      </>

    )
}
  )

function handleFeed(paddock){
  const url = '/api/paddocks/' + paddock.id;
  let request = new Request()
  request.put(url, paddock).then(() => {
    props.getPaddocks()
  })
}

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
