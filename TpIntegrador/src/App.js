import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </>
  );
}

export default App;
