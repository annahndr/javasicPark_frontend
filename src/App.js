import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Navbar.js';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path="/" component{HomeContainer}/>


          </Switch>

          </React.Fragment>

        </Router>

      </div>

    );
  }
}

export default App;
