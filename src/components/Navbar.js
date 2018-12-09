import React, {Component} from 'react';
// import HeaderNav from '../components/HeaderNav.js'
import DisplayContainer from '../containers/DisplayContainer.js'
import PaddocksList from './PaddocksList.js'
import DinosaursList from './DinosaursList.js'
import '../containers/homeContainer.css';


class Navbar extends Component {
  constructor() {
    super();
    this.state = { page: null };

    this.gotoHome = this.gotoHome.bind(this);
    this.gotoDino = this.gotoDino.bind(this);
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
        <img src="./images/JAVASIC_PIC_LOGO.png" alt="logo" height="100" width="auto"/>
        <img src="./images/JAVASIC_LOGO.png" alt="logo" height="100" width="600"/>
        <img src="./images/JAVASIC_PIC_LOGO.png" alt="logo" height="100" width="auto"/>
      </header>
      <div className="navbar">
        <a onClick={this.gotoHome}>Home</a>
        <a onClick={this.gotoDino}>Dinosaurs</a>
        <a onClick={this.gotoPaddock}>Paddock</a>
        <a>EVACUATE</a>
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
      return <DinosaursList />;
      case "/paddocks":
      return <PaddocksList />;
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
}

export default Navbar;
