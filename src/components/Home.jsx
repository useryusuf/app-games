import React from "react";
import image from "../assets/image.jpg";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="row">
      <div className="col-2 genres-aside  d-none d-lg-block">
        <h3 className="fw-bolder m-4">Genres</h3>
        <hr />
        <Link to={"/"} className="link">
          Horror
        </Link>
        <hr />
      </div>
      <div className="col">
        <div className="row">
          <h1 className="fw-bolder my-3">Games</h1>
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <select class="form-select">
                  <option selected>Platforms</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-3">
                <select class="form-select">
                  <option selected>Filter by: x</option>
                  <option value="x">x</option>
                  <option value="y">y</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row mt-5 row-gap-2 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
              <div className="col">
                <div class="card cursor-pointer shadow rounded rounded-3">
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
              <div className="col">
                <div class="card cursor-pointer shadow rounded rounded-3">
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
              <div className="col">
                <div class="card cursor-pointer shadow rounded rounded-3">
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
              <div className="col">
                <div class="card cursor-pointer shadow rounded rounded-3">
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
              <div className="col">
                <div class="card cursor-pointer shadow rounded rounded-3">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
