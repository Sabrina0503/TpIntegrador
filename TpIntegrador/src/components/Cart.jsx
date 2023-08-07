import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, qty: 1 }]);
    }
  };

  const handleDel = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.qty > 1
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      )
    );
  };

  const emptyCart = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="px-4 my-5 bg-light rounded-3 py-5">
            <h3>El Carro se encuentra Vacio</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cartItemsLayout = (product) => {
    return (
      <div key={product.id} className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12 mb-4">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
            <div className="btn-group" role="group" aria-label="Cart Actions">
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleDel(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const buttons = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-75">
              Formas de Pago
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {cartItems.length === 0 ? emptyCart() : cartItems.map(cartItemsLayout)}
      {cartItems.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;