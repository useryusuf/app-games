import React from "react";
import image from "../assets/image.jpg";

const Game = () => {
  return (
    <div className="col">
      <div class="card cursor-pointer rounded rounded-3">
        <img src={image} class="card-img-top" alt="" />
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <div className="brands">a b c</div>
            <div className="score my-1 badge bg-success">92</div>
          </div>
          <h3 class="card-text fw-bold">Lorem, ipsum dolor.</h3>
          <div className="emoji">M</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
