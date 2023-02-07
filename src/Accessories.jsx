import React from "react";
import AccessoriesData from "./AccessoriesData";
import ProductCards from "./ProductCards";
import { CartProvider } from "react-use-cart";

function Accessories() {
  return (
    <>
      <div className="container-fluid  mb-5">
        <div className="row">
          {/* we use only 10 colum out of 12 and show in center */}
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {AccessoriesData.map((val, idx) => {
                return (
                  <CartProvider>
                  <ProductCards
                    item={val}
                    id={val.id}
                    key={idx}
                    imgsrc={val.imgsrc}
                    price={val.price}
                    title={val.title}
                  />
                  </CartProvider>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accessories;
