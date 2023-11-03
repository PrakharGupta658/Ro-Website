import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import AccessoriesData from "./AccessoriesData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider, useCart } from "react-use-cart";

function ProductDetail() {
  const [state, setState] = useState();
  let { id } = useParams();

  const { addItem } = useCart();

  console.log("id is", id);

  useEffect(() => {
    let count = 0;

    ProductData.map((item) => {
      if (item.id === id) {
        setState(item);
        count++;
      }
    });

    if (count === 0) {
      AccessoriesData.map((item) => {
        if (item.id === id) {
          setState(item);
        }
      });
    }
    count = 0;
  });
  function handleTotalItem() {
    window.location.reload();
  }
  console.log("state is", state);

  return (
    <>
   
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    src={state && state.imgsrc ? state.imgsrc : null}
                    className="img-fluid animated"
                    alt="ro img"
                    style={{ height: "500px" }}
                  />
                </div>
                <div className="col-lg-6 order-1 order-lg-2  d-none d-md-block mt-5">
                  <h3 className="text-center" style={{ color: "gray" }}>
                    Product Detail
                  </h3>
                  <MDBRow className="mt-5">
                    <MDBCol md="6">
                      <h5>{state && state.title ? state.title : null}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                          <MDBIcon fas icon="star" />
                        </div>
                        <span>4.2</span>
                      </div>

                      <div className="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span className="text-primary"> • </span>
                        <span>Havells</span>
                      </div>
                      <p className="mb-4 mb-md-0" style={{ fontSize: "15px" }}>
                        Reverse osmosisis a water purification process that
                        removes ions, unwanted molecules and larger particles
                        from drinking water using a partially permeable
                        membrane.
                      </p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">
                          ₹{""}
                          {state && state.price ? state.price : null}
                        </h4>
                        <span className="text-danger">
                          <s>₹17999.99</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <MDBBtn
                          outline
                          color="primary"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            addItem(state);
                            toast.info(
                              `Your Item ${state.title} is successfully added to Cart`,
                              {
                                position: "top-center",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                              }
                            );
                            setTimeout(() => {
                              handleTotalItem();
                            }, 2000);
                          }}
                        >
                          ADD TO CART
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default ProductDetail;
