import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
         <footer className="w-100 bg-light text-center fixed-bottom">
        <p className="my-1">
          Copyright © {new Date().getFullYear()} Coded By- Prakhar Gupta All
          Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
