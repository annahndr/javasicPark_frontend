import React from "react";
import PaddockListItem from './PaddockListItem.js';
import Request from '../helpers/request'

//In order to change table row colour, I think we need PaddocksList to have a state, so that on a click it can be re-rendered
// style={{background:this.state.color}} added to table row
const PaddocksList = (props) => {

  if (!props.paddockList) return null;

  const paddocks = props.paddockList.map((paddock, index) =>{

    return (

      <>
      <tr key={index} className="table-row" >
      <PaddockListItem paddock = {paddock} handleFeed = {handleFeed} handleActivate={handleActivate}/>
      </tr>
      </>

    )
}
  )

function handleFeed(paddock){
  const url = '/api/paddocks/' + paddock.id;
  let request = new Request()
  request.patch(url, paddock).then(() => {
    props.getPaddocks()
    setTimeout(() => { returnToUnfed(paddock) }, 5000) // function definition, so that is doesn't happen immediately
    })
  }


function returnToUnfed(paddock){
  paddock.fed = false
  const url = '/api/paddocks/' + paddock.id;
  let request = new Request()
  request.patch(url, paddock).then(() => {
    props.getPaddocks()
  })

}

function handleActivate(paddock){

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
