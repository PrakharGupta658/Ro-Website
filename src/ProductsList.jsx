import React from "react";
import Product from "./Product";
import Accessories from "./Accessories";


const ProductsList = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" style={{backgroundColor: "rgb(174 182 187)"}}>Our Products</h1>
      </div>
      <Product/>
      
<br/>
      <div className="my-5">
        <h1 className="text-center" style={{backgroundColor: "rgb(174 182 187)"}}>RO Accessories</h1>
      </div>
      <br/>
      <Accessories/>

    </>
  );
};

export default ProductsList;
