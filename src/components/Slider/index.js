import Slide1 from "../../assets/images/banner2.jpg";
import Slide2 from "../../assets/images/banner1.jpg";
import Slide3 from "../../assets/images/banner3.jpg";
import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <img className="d-block w-85" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-85" src={Slide3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-85" src={Slide2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
