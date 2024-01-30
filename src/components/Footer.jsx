import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light p-4 mt-4">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  SEO
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled m-2">
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-center">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
