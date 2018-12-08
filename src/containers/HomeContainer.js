import React, {Component} from 'react';
import HeaderNav_homeContainer from '../components/HeaderNav_homeContainer.js'


class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      paddock: {}
    }
  }


render(){
  return (
    <HeaderNav_homeContainer/>
    <DisplayContainer/>

  )
}

}
 export default HomeContainer;
