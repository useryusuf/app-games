import React from "react";
import image from "../assets/image.jpg";

const Game = ({ data }) => {
  return (
    <div className="col">
      <div className="card cursor-pointer rounded rounded-3">
        <img src={data.background_image} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="brands">a b c</div>
            <div className="score my-1 badge bg-success">92</div>
          </div>
          <h3 className="card-text fw-bold">{data.name}</h3>
          <div className="emoji">M</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
