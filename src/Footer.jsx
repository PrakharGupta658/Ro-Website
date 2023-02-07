import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center my-5">
        <p className="mt-md-5">Copyright © {year} Coded By- Prakhar Gupta All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
