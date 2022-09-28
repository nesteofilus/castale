import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 694,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} id="sliderContainer">
        {props.array.map((arrayContent) => (
          <Link to={`/stories/${arrayContent._id}`}>
            <img
              src={arrayContent.image}
              alt="Unable to load"
              className="carouselImage"
            />
            <div className="carouselTitle">{arrayContent.title}</div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
