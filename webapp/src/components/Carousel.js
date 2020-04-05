import React from "react";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel({ items, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className="carousel">
      <h3>{title}</h3>
      <div className="carouselHolder">
        <Slider {...settings}>
          {items.map((item, i) => {
            return (
              <div className="carouselItem" key={i}>
                <a href={item.link}>
                  <img src={item.image} alt={`comedian ${i}`} />
                  <div className="name">{item.name}</div>
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
