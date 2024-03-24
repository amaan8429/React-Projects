import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="service-name">Web Development</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="service-name">Web Design</p>
        </div>
        <div>
          <img src={img3} alt="item3" />
          <p className="service-name">Android Developement</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
