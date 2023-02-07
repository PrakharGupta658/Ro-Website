import React from "react";
import Homeimg from "../src/image/homeimg.png";
import Comman from "./Comman";

const Home = () => {
  return (
    <>
      <Comman
        greating="Welcome To"
        name="Shree Banke Viharee Jee Enterprises"
        name1= "Your trusted source for high-quality water purification systems."
        content="Trusted source for high-quality water purification systems. We are dedicated to providing clean and safe drinking water for households and businesses across Farrukhabad."
        btn="Check Products"
        img={Homeimg}
        src="/products"
      />
    </>
  );
};

export default Home;
