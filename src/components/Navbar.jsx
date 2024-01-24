import React from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mx-5" href="/">
        <img src={logo} width={"50px"} alt="logo" />
      </a>
      <input
        type="text"
        className="form-control form-control rounded-5 shadow-none w-75"
        placeholder="Search..."
      />
    </nav>
  );
}
