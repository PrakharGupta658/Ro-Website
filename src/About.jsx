import React from "react";
import Comman from "./Comman";
import Aboutimg from "./image/aboutimg.png";

const About = () => {
  return (
    <>
      <Comman
        greating=""
        name="About Page"
        content="Welcome to Shree Banke Viharee Jee Enterprises With years of experience in the industry and a team of expert technicians, we understand the importance of having access to pure, clean water. That's why we offer a wide range of water purifiers, designed to suit your specific needs and budget.
               Thank you for Visiting SBVE for your water purification needs. We look forward to serving you and providing you with the highest quality products and services."
        name2="Our Mission"
        content2=" Our mission is to provide the highest standard of customer service, while offering products that are effective, affordable and environmentally friendly. We believe in using cutting-edge technology to purify water and ensure that our customers have access to the cleanest and healthiest water possible."
        btn="Contact Us"
        img={Aboutimg}
        src="/contact"
      />
    </>
  );
};

export default About;
