import React from "react";
import { NavLink } from "react-router-dom";


const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            {/* we use only 10 colum out of 12 and show in center */}
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0  order-1 order-lg-1 d-flex  justify-content-center flex-column">
                  <h1>
                    {props.greating} <br />{" "}
                    <strong className="brand-name">{props.name}</strong>
                  </h1>
                  <h2 className="my-3 txt">{props.content}</h2>
                  <h1>
                    <strong className="brand-name">{props.name2}</strong>
                  </h1>
                  <h2 className="my-3 txt">{props.content2}</h2>
                  <div className="mt-3">
                    <NavLink to={props.src} className="btn-get-product">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6  order-1 order-lg-2 header-img">
                  <img
                    src={props.img}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
