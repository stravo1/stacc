import React from "react";
import { Col, Row, Carousel } from "rsuite";
function About() {
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ }}>
        <Carousel
          shape={"bar"}
          className="custom-slider"
          autoplay
          autoplayInterval={2500}
        >
          <span className="carouselItem">eeh</span>
          <span className="carouselItem">just another simple beautiful task manager</span>
          <span className="carouselItem">check in later</span>
          
         
        </Carousel>
      </div>
    </div>
  );
}

export default About;
