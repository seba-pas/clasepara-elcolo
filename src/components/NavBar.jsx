import React from "react";
import "./navbar.css";
import LOGO from "../assets/realstate.png";

export const NavBar = () => {
  function login() {
    alert("no te podes loguear pajero");
  }

  return (
    <div className="container">
      <div>
        <img className="logo" src={LOGO} alt="esto es el logo" />
      </div>
      <div className="menues">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Listing</h3>
        <h3>Agents</h3>
        <h3>Property</h3>
        <button className="btn" onClick={login}>
          Log in
        </button>
      </div>
    </div>
  );
};
