import React, {Component} from 'react';

class Map extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }
handleChange(evt){
  evt.preventDefault()
  this.props.onPaddockSelected(evt.target.getAttribute('title'))
  console.log(evt.target.getAttribute('title'));

}
  render(){
    return(
      <div className="map-container">
        <img src="./images/isla_nublar.jpg" useMap="#image-map"/>
        <map name="image-map">
          <area target="" alt="Bay View" title= "3" href="" coords="82,111,312,269" shape="rect" onClick = {this.handleChange}/>
          <area target="" alt="" title="" href="" coords="333,98,569,288" shape="rect"/>
          <area target="" alt="" title="" href="" coords="185,299,316,468" shape="rect"/>
          <area target="" alt="" title="" href="" coords="341,320,542,477" shape="rect"/>
          <area target="" alt="" title="" href="" coords="337,559,68" shape="circle"/>
        </map>
      </div>
    )

  }
}

export default Map
