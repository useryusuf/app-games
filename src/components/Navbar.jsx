import React from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={logo} width={"50px"} className="mx-2 mx-lg-4" alt="logo" />
      </a>
      <input
        type="text"
        className="form-control form-control px-5 rounded-5 shadow-none w-75 me-2 me-lg-5"
        placeholder="Search..."
      />
    </nav>
  );
}
