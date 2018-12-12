import React, {Component} from 'react';
// import HeaderNav from '../components/HeaderNav.js'
import DisplayContainer from '../containers/DisplayContainer.js'
import PaddocksList from './PaddocksList.js'
import Visitors from './Visitors.js'
import DinosaursList from './DinosaursList.js'
import '../containers/homeContainer.css';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };

    this.gotoHome = this.gotoHome.bind(this);
    this.gotoDino = this.gotoDino.bind(this);
    this.gotoVisitors = this.gotoVisitors.bind(this);
    this.gotoPaddock = this.gotoPaddock.bind(this);
  }
// onPaddockSelected(id){
//   console.log("homecontainer paddockselected", id);
// }
  render() {
    const child = this.pageComponent();
    return (
      <>
      <header className="header">
        <img src="./images/JAVASIC_PIC_LOGO.png" alt="logo" height="150" width="auto"/>
        <img src="./images/JAVASIC_LOGO.png" alt="logo" height="150" width="600"/>
        <img src="./images/JAVASIC_PIC_LOGO.png" alt="logo" height="150" width="auto"/>
      </header>
      <div className="navbar">
        <a onClick={this.gotoHome}>Home</a>
        <a onClick={this.gotoDino}>Dinosaurs</a>
        <a onClick={this.gotoPaddock}>Paddocks</a>
        <a onClick={this.gotoVisitors}>Visitors</a>
      </div>
      <div>
        {child}
      </div>
      </>
    );
  }

  pageComponent() {

    switch (this.state.page) {
      case "/dinosaurs":
      return <DinosaursList paddock = {this.props.paddock} getPaddock = {this.props.getPaddock} paddocks = {this.props.paddocks} getDinosaurs = {this.props.getDinosaurs} dinoList = {this.props.dinosaurs} />;
      case "/paddocks":
      return <PaddocksList paddockList = {this.props.paddocks} getPaddocks={this.props.getPaddocks} getPaddocksResetToUnfed={this.props.getPaddocksResetToUnfed}/>;
      case "/visitors":
      return <Visitors visitors={this.getVisitors} visitorCount={this.getNumberOfVisitors}/>;
      default:
      return <DisplayContainer />;
    }
  }

  gotoHome(event) {
    event.preventDefault();
    this.setState({ page: "/home" });
  }

  gotoDino(event) {
    event.preventDefault();
    this.setState({ page: "/dinosaurs" });
  }

  gotoPaddock(event) {
    event.preventDefault();
    this.setState({ page: "/paddocks" });
  }
  gotoVisitors(event) {
    event.preventDefault();
    this.setState({ page: "/visitors" });
  }
}

export default Navbar;
