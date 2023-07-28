import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container navbar navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand mr-auto navbar-nav" href="#">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar navbar-dark" id="navbarNavAltMarkup">
              <div class="navbar-nav end-0">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a class="nav-link" href="#">
                  About
                </a>
                <a class="nav-link" href="#">
                  Services
                </a>
                <a class="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
