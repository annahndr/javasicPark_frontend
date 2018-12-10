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
          <area alt="Bay View" title= "3" coords="82,111,312,269" shape="rect" onClick = {this.handleChange}/>
          <area alt="Green Hills" title="2" coords="333,98,569,288" shape="rect" onClick = {this.handleChange}/>
          <area alt="Sunny Acres" title="1" coords="185,299,316,468" shape="rect" onClick = {this.handleChange}/>
          <area alt="Lake Side" title="4" coords="341,320,542,477" shape="rect" onClick = {this.handleChange}/>
          <area alt="Fishers Point" title="5" coords="337,559,68" shape="circle" onClick = {this.handleChange}/>
        </map>
      </div>
    )

  }
}

export default Map
