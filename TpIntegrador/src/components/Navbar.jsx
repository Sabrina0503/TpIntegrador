import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [cartItems, setCartItems] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addProductToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
            Sunflower Clothing
          </NavLink>
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="buttons">
                  <NavLink className="btn btn-outline-dark mx-2" to="/products">
                    Productos
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="buttons">
                  <NavLink className="btn btn-outline-dark" to="/cart">
                    <i className="fa fa-shopping-cart me-1"></i> Mi Carrito ({cartItemCount})
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

