import React, { useState , useEffect} from "react";
import Homeimg from "../src/image/homeimg.png";
import Comman from "./Comman";
import { auth } from "./Firebase/Firebase";



const Home = (props) => {

  const [checkLogin , setCheckLogin] = useState("/loginpage");

  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
      if(usrName) {
         setCheckLogin("/logout")
      } else {
        setCheckLogin("/loginpage")
      }
    
    });
  }, []);

  return (
    <>
      <Comman
        greating="Welcome To"
        name="Shree Banke Viharee Jee Enterprises"
        name1="Trusted source for water purification systems."
        content="Trusted source for high-quality water purification systems. We are dedicated to providing clean and safe drinking water for households and businesses across Farrukhabad."
        btn="Check Products"
        btn2={props.btn2Name}
        img={Homeimg}
        src="/products"
        src2={checkLogin}
      />
    </>
  );
};

export default Home;
