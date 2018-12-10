import React from "react";
import Dinosaurs from './Dinosaurs.js';

const DinosaursList = (props) => (
  <div className="dinosaurs_list">
    <p>All dinosaurs</p>
    <Dinosaurs />
  </div>
);

export default DinosaursList;
