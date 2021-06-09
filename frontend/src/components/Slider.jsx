import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
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
      <div className="container px-0  py-2 row row-cols-1 g-4">
        <Slider {...settings}>
          {cards.map((card) => (
            <div className="col  bg-transparent" key={card.id}>
              <div className="card mx-2 h-100 bg-light pt-1 px-2">
                <img
                  src={`./images/img ${card.img}.png`}
                  alt=""
                  className="d-block mx-auto mb-2 w-75"
                />
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "2rem" }}
                >
                  <p className="d-flex " style={{ gap: ".5rem", flex: 1 }}>
                    <img src="/images/Vector.svg" alt="" /> 35 lessons
                  </p>
                  <p className="d-flex" style={{ gap: ".5rem", flex: 1 }}>
                    <img src="/images/icon.svg" alt="" /> 28th April 2016
                  </p>
                </div>
                <h4 className="text-center text-primary mb-2">{card.title}</h4>
                <p className="text-center">{card.body}</p>
                <a href=".">
                  <button className="btn border-bottom border-success border-start-0 border-end-0  w-100 enroll">
                    Enroll Now
                    <i className="fas fa-arrow-right mx-2"></i>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const cards = [
  {
    id: 1,
    img: 3,
    title: "Creche",
    body: "For anyone validating Framer as a professional prototyping tool.",
  },
  {
    id: 2,
    img: 2,
    title: "Transition",
    body: "For anyone validating Framer as a professional prototyping tool.",
  },
  {
    id: 3,
    img: 1,
    title: "Nursery",
    body: "For anyone validating Framer as a professional prototyping tool.",
  },
  {
    id: 4,
    img: 4,
    title: "Primary",
    body: "For anyone validating Framer as a professional prototyping tool.",
  },
  {
    id: 5,
    img: 5,
    title: "Secondary",
    body: "For anyone validating Framer as a professional prototyping tool.",
  },
];
