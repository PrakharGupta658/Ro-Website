import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductsList from "./ProductsList";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar />
        </CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* by default home page is show */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
