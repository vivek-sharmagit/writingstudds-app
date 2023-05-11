import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Images/3(1).jpg";
import img2 from "../Images/4(1).jpg";

const Service = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={1000}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Dissertation</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Assignment Help</p>
        </div>
      </Carousel>
    </div>
  );
};
export default Service;