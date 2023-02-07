import React from "react";
// import Img2 from "./image/Banner2.webp";
import Img3 from "./image/Banner3.webp";
import Img4 from "./image/Banner4.webp";

function Banner() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        className="mb-5"
        
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Img3} class="d-block w-100" alt="b-1" />
          </div>
          <div class="carousel-item">
            <img src={Img3} class="d-block w-100" alt="b-2" />
          </div>
          <div class="carousel-item">
            <img src={Img4} class="d-block w-100" alt="b-3" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Banner;
