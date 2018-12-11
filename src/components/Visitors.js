import React, {Component} from "react";
import '../containers/displayContainer.css';

class Visitors extends Component {
  constructor(props){
    super(props);
    this.state = {
      visitors: 0,
      show: true
    };
  }

  addVisitor = () => {
    this.setState({ visitors: this.state.visitors + 1 });
    console.log(this.state.visitors);
  }
  exitVisitor = () => {
    this.setState({ visitors: this.state.visitors - 1 });
    console.log(this.state.visitors);
  }
  evacuatePark = () => {
    this.setState({ visitors: this.state.visitors = 0 });
    console.log(this.state.visitors);
  }


  render() {
    return (
      <>
      <div className="visitor-buttons">
      <button className = "increment-button" onClick={this.addVisitor}>Add Visitor</button>
      <button className = "increment-button" onClick={this.exitVisitor}>Exit Visitor</button>
      </div>
      <div className="visitor-number">
      <h2>Visitor Count: { this.state.visitors } guests</h2>
      </div>
      <div className="evacuate">
      <button className = "evac-button" onClick={this.evacuatePark}>EVACUATE!</button>
      </div>
      </>
    );
  }
}

export default Visitors
