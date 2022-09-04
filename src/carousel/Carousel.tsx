import React, { Component } from "react";
import Slider from "react-slick";
import { carousel } from "../components/data";
import Animation from "./Animation";
import "./carousel.scss"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
      {carousel.map((item,idx) => (
      <div key={idx} className="carousel container">
        <div className="carousel-items">
          <div className="carousel-left">
            <img src={item.img} 
            alt="banner" width={300} height={330} className="carousel-img" />
          </div>
          <div className="carousel-right">
            <p>{item.title}</p>
            <button className="carousel-btn">Batafsil</button>
          </div>
        </div>
      </div>
      ))}
    </Slider>
  )
}

export default Carousel