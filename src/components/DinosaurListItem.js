import React from 'react';
import Request from '../helpers/request'
const DinosaurListItem = ({dino, handleDelete, paddocks, handlePaddockUpdate})=> {

if(!dino||!paddocks) return null;


function deleteDinoSelected(){
  handleDelete(dino.id)
}

function getValue(evt){
  console.log("value:", evt.target.value);
  let optionValue = '';
  return optionValue = evt.target.paddock.value
}
function addUpdatePaddock(evt){
  evt.preventDefault();
  const paddockLink = getValue(evt)
  // console.log("event:", evt.target.paddock.value);
  console.log("paddockLink:",paddockLink);
  dino.paddock = paddockLink;
  console.log("dinosaur:", dino);
  handlePaddockUpdate(dino.id, dino)
}

function filteredPaddocksHerbivore(){
    return paddocks.filter((paddock, index)=> paddock.paddockType === "Herbivore")
    .map(pad =>

      <option id = {pad.id} value = {pad._links.self.href} key={pad.id} className="paddock" onSelect = {getValue}>

        {pad.name}

      </option>

    )
}

function filteredPaddocksCarnivore(){
  return paddocks.filter((paddock, index)=> paddock.paddockType === "Carnivore")
      .map(pad =>
        <option id = {pad.id} value = {pad._links.self.href} key={pad.id} className="paddock" onSelect = {getValue}>

          {pad.name}

        </option>

      )
}
//
// const paddockNames = filteredPaddocks.map((paddock, index) =>{
//
// return(
//     <option id = {paddock.id} value = {paddock._links.self.href} key={paddock.id} className="paddock" onSelect = {getValue}>
//
//       {paddock.name}
//
//     </option>
//     )
//   }
// )

let filteredPaddocks = dino.dinoDietType==="Herbivore" ? filteredPaddocksHerbivore():filteredPaddocksCarnivore();

return(
  <>
      <td>
        {dino.name}
      </td>
      <td>
        {dino.dinoSpecies}
      </td>
      <td>
        {dino.dinoDietType}
      </td>
      <td>
        <img src = {dino.dinoImage}/>
      </td>
      <td>
      {dino.paddock.name}
      <form className="paddock-change" onSubmit = {addUpdatePaddock}>
          <select name="paddock">
            {filteredPaddocks}
          </select>
          <input type="submit" value = "SAVE" />
        </form>
      </td>
      <td>
        <button onClick = {deleteDinoSelected}>DELETE</button>
      </td>
    </>
)


}

export default DinosaurListItem;
