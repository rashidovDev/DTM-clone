import React from 'react'
import Slider from "react-slick";
import { carouselItems } from '../data';
import "./component.scss"
import {INews as News1} from "../../typescript"

interface INews {
  title : News1["title"]
}

const News : React.FC<INews["title"]> = ({type,heading}) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };
  return (
    <>
    <h1 className='news-heading'>{heading}</h1>
      <div className='container news-main'>
        <Slider {...settings} className="news">
          {carouselItems.map((item, idx) => (
           item.sort === type && (
          <div key={idx} className='news-item'>    
            <img src={item.img} alt="" 
            style={{textAlign:"center",width:"100%",height:"145px" }} /> 
          </div>
           )
          ))}
        </Slider>
      </div>
    </>
  )
}

export default News