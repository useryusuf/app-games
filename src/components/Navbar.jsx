import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-xl">
        <a class="navbar-brand" href="link">
          Blog
        </a>
        <button class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample07XL">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="dashboard.html">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
