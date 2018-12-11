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
      paddock: null,
      dinoImage: ''
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDinosaurPost=this.handleDinosaurPost.bind(this)
  this.getID = this.getID.bind(this)
  this.validateCanAdd = this.validateCanAdd.bind(this)
  this.getDinosaursInPaddock=this.getDinosaursInPaddock.bind(this)

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
  const dietTypesMatch = dinosaur.dinoDietType===this.props.paddock.paddockType;
  const dietTypeIsHerbivore = dinosaur.dinoDietType==="Herbivore"
  const dietTypeIsCarnivore = dinosaur.dinoDietType==="Carnivore"
  const sameTypeOfCarnivore = this.props.paddock._links.dinosaurs.includes(dinosaur.dinoSpecies)
  const dinosaurArrayEmpty = this.props.paddock.dinoCount===0

  return ((dietTypesMatch&&dietTypeIsHerbivore)||(dietTypesMatch&&dietTypeIsCarnivore&&(sameTypeOfCarnivore||dinosaurArrayEmpty)))
}

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur).then(() => {
      this.props.getDinosaurs()
      }
    )
  }

handleSubmit(evt){
  const option = evt;
    evt.preventDefault()
    const dinosaur = {
      "name": evt.target.name.value,
      "dinoSpecies": evt.target.dinoSpecies.value,
      "dinoDietType": evt.target.dinoDietType.value,
      "paddock": evt.target.paddock.value,
      "dinoImage": evt.target.dinoImage.value

    }

    const id = this.getID(evt)
    const paddock = this.props.getPaddock(id);
    if(!this.props.paddock._embedded)return null;
    const dinoList = this.getDinosaursInPaddock(paddock)


    console.log(this.props.paddock);
    const canAdd = this.validateCanAdd(dinosaur)

    if(canAdd===true){
      this.handleDinosaurPost(dinosaur)
  }

}




render(){
  if(!this.props.paddocks) return null;

  const paddockNames = this.props.paddocks.map((paddock, index) =>{

  return(
      <option id = {paddock.id} value = {paddock._links.self.href} key={paddock.id} className="paddock">

        {paddock.name}

      </option>
      )
    }
  )
  return(
    <form className="comment-form" onSubmit = {this.handleSubmit}>
      <input type="text" placeholder="Dinosaur Name" name = "name"/>
        <select name="dinoSpecies">
          <option>Tyrranosaurus-Rex</option>
          <option>Diplodaucus</option>
          <option>Velocerpator</option>
          <option>Stegosaurus</option>
        </select>
        <select name="dinoDietType">
          <option>Herbivore</option>
          <option>Carnivore</option>
        </select>
        <select name="paddock">
            {paddockNames}
        </select>
        <input type="text" placeholder="Image Path" name = "dinoImage"/>

      <input type="submit" value = "Post" />
    </form>
    )
  }
}

export default DinosaurForm;
