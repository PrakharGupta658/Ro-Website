import React, { useEffect } from "react";
import { useCart } from "react-use-cart";

function ProductCards(props) {
  const { addItem } = useCart();

  console.log("additem is==", addItem);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.title}
            width={300}
            height={300}
          />
          <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
            <h4 className="card-text">INR {props.price}</h4>
            <p>(include all taxes)</p>
            <button
              className="btn btn-warning"
              onClick={
                (() => {
                  addItem(props.item);
                 alert(`Your Item ${props.title} is successfully added to Cart`) }
                )
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
