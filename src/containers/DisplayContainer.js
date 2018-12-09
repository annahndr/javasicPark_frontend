import React, {Component} from 'react';
import Request from '../helpers/request.js';


class DisplayContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: "test page"
    }


  }



  render(){
    if (!this.props.paddock) return null;

      return(
        <>
        <p>Display Container says hello</p>

          <div className="paddock">
              <p> {this.props.paddock.name}</p>
          </div>


        </>
  )
}

////
}

export default DisplayContainer;
