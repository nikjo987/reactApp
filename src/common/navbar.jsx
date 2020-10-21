import React from "react";
import { Link } from "react-router-dom";
import { BsFilm } from "react-icons/bs";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        className="navbar-brand"
        to=""
        style={{
          fontFamily: "cursive",
          fontStyle: "italic"
        }}
      >
        Rental Square <BsFilm />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/movies">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/not-found">
              NotFound
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
