import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
            Sunflower Clothing
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="buttons">
                  <NavLink className="btn btn-outline-dark mx-2 " to="/products">
                    Productos
                  </NavLink>
                </div>
              </li>
              <div className="buttons">
                <NavLink className="btn btn-outline-dark" to="/cart">
                  <i className="fa fa-shopping-cart me-1"></i> Mi Carrito (
                  {state.length})
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
