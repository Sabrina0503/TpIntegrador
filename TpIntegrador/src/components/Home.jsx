import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          style={{ height: "550px", objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
          <div className="container text-center">
            <h5 className="card-title display-3 fw-bolder mb-0">Tu tienda web de confianza!</h5>
            <p className="card-text lead fs-2">Observa todos nuestros Productos</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
