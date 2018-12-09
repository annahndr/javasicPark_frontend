import React, {Component} from 'react';
import HeaderNav_homeContainer from '../components/HeaderNav_homeContainer.js'
import DisplayContainer from './DisplayContainer';


class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      paddock: {}
    }
  }


render(){
  return (
    <>
    <HeaderNav_homeContainer/>
    <DisplayContainer/>
    </>
  )
}

}
 export default HomeContainer;
