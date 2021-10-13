import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header class="head">
      <img src="https://kevin-last-challenge.netlify.app/logo.svg" alt="" />
      <nav>
        <a class="nav-link" href="#home">
          Home
        </a>
        <a class="nav-link" href="#about">
          About
        </a>
        <a class="nav-link" href="#contact">
          Contact
        </a>
        <a class="nav-link" href="#signin">
          Sign In
        </a>
        <a class="nav-link link-2" href="#signup">
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Header;
