import React from "react";

export default function Footer() {
  return (
    <footer class="bg-dark text-light p-4">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="col-md-3 mb-3">
            <h5>Services</h5>
            <ul class="list-unstyled">
              <li>
                <a class="text-decoration-none text-white" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a class="text-decoration-none text-white" href="#">
                  SEO
                </a>
              </li>
              <li>
                <a class="text-decoration-none text-white" href="#">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div class="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled m-2">
              <li>
                <a class="text-decoration-none text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="text-decoration-none text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="text-decoration-none text-white" href="#">
                  Services
                </a>
              </li>
              <li>
                <a class="text-decoration-none text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <p class="text-center">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
