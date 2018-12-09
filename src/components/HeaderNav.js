import React from 'react';

const HeaderNav =() => {


  return(
    <>
    <header>
      <img src="../JAVASIC_PARK_LOGO" alt="logo"/>
      <h1>JAVASIC WORLD</h1>
    </header>
    <nav>
      <ul>
        <li className="nav-link">
          Home
        </li>
        <li className="nav-link">
          Dinosaurs
        </li>
        <li className="nav-link">
          Paddocks
        </li>
      </ul>
    </nav>
    </>
  )
}

export default HeaderNav;
