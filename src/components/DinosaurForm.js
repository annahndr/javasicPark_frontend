import React, {Component} from 'react';
import Request from '../helpers/request';
import DinosaursList from './DinosaursList';

class DinosaurForm extends Component {

  constructor(props){
  super(props);
  this.state = {
      name: '',
      dinoSpecies: '',
      dinoDietType: '',
      dinoImage: ''
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDinosaurPost=this.handleDinosaurPost.bind(this)
  this.getID = this.getID.bind(this)
  this.validateCanAdd = this.validateCanAdd.bind(this)
  this.getDinosaursInPaddock=this.getDinosaursInPaddock.bind(this)
  this.addDietType = this.addDietType.bind(this)

}

getID(option){
  const index = option.target.paddock.selectedIndex;
  const optionElement = option.target.paddock.childNodes[index]
  const id =  optionElement.getAttribute('id');
  return parseInt(id);
}

getDinosaursInPaddock(paddock){
  const url = paddock.dinosaur.href
  let request = new Request()
  const data = request.get(url)

  console.log("dino in paddock:", data);
}

validateCanAdd(dinosaur){
  debugger;
  // if(!this.props.paddock)return null;
  console.log("validate sees paddock",this.props.paddock);

  const dietTypesMatch = dinosaur.dinoDietType===this.props.paddock.paddockType;
  const dietTypeIsHerbivore = dinosaur.dinoDietType==="Herbivore"
  const dietTypeIsCarnivore = dinosaur.dinoDietType==="Carnivore"
  // const sameTypeOfCarnivore = this.props.paddock.dinosaurs.includes(dinosaur.dinoSpecies)
  // console.log(sameTypeOfCarnivore);
  const dinosaurArrayEmpty = this.props.paddock.dinoCount===0
  console.log(dinosaurArrayEmpty);
  return ((dietTypesMatch&&dietTypeIsHerbivore)||((dietTypesMatch&&dietTypeIsCarnivore)))
}

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur).then(() => {
      this.props.getDinosaurs()
      }
    )
  }
addDietType(dinosaur){
  let result=null;
  if(dinosaur ==="Tyrranosaurus-Rex"||dinosaur ==="Velocerpator"){
    result="Carnivore"
  }else(result = "Herbivore")
  return result
}
handleSubmit(evt){
  const option = evt;
    evt.preventDefault()
    const dinosaur = {
      "name": evt.target.name.value,
      "dinoSpecies": evt.target.dinoSpecies.value,
      "dinoDietType": this.addDietType(evt.target.dinoSpecies.value),
      "dinoImage": evt.target.dinoImage.value

    }

    // const id = this.getID(evt)
    // this.props.getPaddock(id)
    // if(!this.props.paddock) return null;
    // const canAdd = this.validateCanAdd(dinosaur)
    //
    // // const dinoList = this.getDinosaursInPaddock(paddock)
    //
    //
    //
    //
    //
    // if(canAdd===true){
      this.handleDinosaurPost(dinosaur)
  // }

}




render(){
  if(!this.props.paddocks) return null;

  return(
    <form className="comment-form" onSubmit = {this.handleSubmit}>
      <input type="text" placeholder="Dinosaur Name" name = "name"/>
        <select name="dinoSpecies">
          <option>Tyrranosaurus-Rex</option>
          <option>Diplodaucus</option>
          <option>Velocerpator</option>
          <option>Stegosaurus</option>
        </select>

        <input type="text" placeholder="Image Path" name = "dinoImage"/>

      <input type="submit" value = "ADD DINO" />
    </form>
    )
  }
}

export default DinosaurForm;
