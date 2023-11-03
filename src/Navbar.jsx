import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useCart } from "react-use-cart";

import "./index.css";
import { NavLink } from "react-router-dom";
import brandLogo from "./image/brandlogo1.png";

const Navbar = (props) => {
  const { totalUniqueItems } = useCart();
 
  return (
    <>
      <div className="container-fluid nav_bg" >
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={brandLogo} height={80} className="mt-2" />
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
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <h2 className="navbar-nav ms-auto mb-2 mb-lg-0 wlcmText">
                    {props.Wlcm} {props.Usrname}
                  </h2>

                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                        <div className="cart">
                          <i className="fas fa-shopping-cart" style={{marginTop:"6px" , color:"black"}} />
                          <span class="count">{totalUniqueItems}</span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
