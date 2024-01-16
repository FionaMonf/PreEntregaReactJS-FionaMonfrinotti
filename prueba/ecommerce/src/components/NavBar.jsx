import { useState } from "react";

import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div
          className="container-fluid navegador"
          style={{ justifyContent: "center" }}
        >
          <div className="Categories">
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={`/category/Buzos`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              Buzos
            </NavLink>
            <NavLink
              to={`/category/Zapatillas`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              Zapatillas
            </NavLink>
          </div>
          <CartWidget></CartWidget>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

{
  /* <a className="navbar-brand" href="#">Home</a>
      <a className="navbar-brand" href="#">Zapatillas</a>
          <a  className="navbar-brand" href="#">Buzos</a>
          <a  className="navbar-brand" href="#">Contacto</a> */
}
