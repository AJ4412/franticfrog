import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
// import Team1 from "../assets/png/team1.png";
// import Team2 from "../assets/png/team2.png";
// import Team3 from "../assets/png/team3.png";

import "slick-carousel/slick/slick-theme.css";
const TeamSlider = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="team-slider">
      <div className=" px-sm-3 px-2">
        <img
          className="d-block mx-auto w-100 "
          src="/png/team1.png"
          alt="Rare1"
        />
        <h1 className="team-heading kanit-font-family text-center pt-2">
          B.165
        </h1>
        <p className="small-text opacity-07  text-center">FOUNDER & DESIGNER</p>
      </div>
      <div className=" px-sm-3 px-2">
        <img
          className="d-block mx-auto w-100 "
          src="/png/team2.png"
          alt="Rare1"
        />
        <h1 className="team-heading kanit-font-family text-center pt-2">
          Angie
        </h1>
        <p className="small-text opacity-07  text-center">Co-Founder</p>
      </div>
      <div className=" px-sm-3 px-2">
        <img
          className="d-block mx-auto w-100 "
          src="/png/team3.png"
          alt="Rare1"
        />
        <h1 className="team-heading kanit-font-family text-center pt-2">
          Johnny Bravo
        </h1>
        <p className="small-text opacity-07  text-center"> Celebrity Scout</p>
      </div>
      <div className=" px-sm-3 px-2">
        <img
          className="d-block mx-auto w-100 "
          src="/png/team2.png"
          alt="Rare1"
        />
        <h1 className="team-heading kanit-font-family text-center pt-2">
          Angie
        </h1>
        <p className="small-text opacity-07  text-center">Co-Founder</p>
      </div>
      <div className=" px-sm-3 px-2">
        <img
          className="d-block mx-auto w-100 "
          src="/png/team3.png"
          alt="Rare1"
        />
        <h1 className="team-heading kanit-font-family text-center pt-2">
          Johnny Bravo
        </h1>
        <p className="small-text opacity-07  text-center"> Celebrity Scout</p>
      </div>
    </Slider>
  );
};

export default TeamSlider;
