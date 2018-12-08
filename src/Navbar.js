import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
return (

  <header>
    <ul>
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/dinosaurs">Dinosaurs</Link>
      </li>
      <li className="nav-link">
        <Link to="/paddocks">Paddocks</Link>
      </li>
    </ul>
  </header>
)

}

export default Navbar;
