import React from 'react';
import Request from '../../helpers/request.js';


class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      paddock: {}
    }
  }

getPaddock(){
  let request = new Request()
  const url = 'api/paddock/' + this.state.paddock.id
  request.get(url).then(data =>{
    this.setState({paddock: data._embedded.paddock}) ///TO RESOLVE
  })
}

componentDidMount(){
  this.getPaddock();
}

render(){
  return (
    <HeaderNavContainer/>
    <IslandContainer/>
  )
}

}
