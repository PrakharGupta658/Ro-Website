import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductsList from "./ProductsList";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./Login/SignUp";
import LogOut from "./Login/LogOut";
import { CartProvider } from "react-use-cart";
import { auth } from "./Firebase/Firebase";


const App = () => {
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState("Login");
  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
      if(usrName) {
        setUserName(usrName.displayName)
        setLogin("LogOut")
        // console.log("user name is ==", userName);
      } else {setUserName("Please Login")
       setLogin("LogIn")
    }
    });
  }, []);
  return (
    <>
      <Router>
        <CartProvider>
          <Navbar Wlcm="Hey!" Usrname={userName} />
        </CartProvider>
        <Routes>
          <Route exact path="/" element={<Home  btn2Name={login}/>} />
          <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/loginpage" element={<LoginPage />} />
          <Route exact path="/signuppage" element={<SignUpPage />} />
          <Route exact path="/logout" element={<LogOut />} />
          {/* by default home page is show */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
