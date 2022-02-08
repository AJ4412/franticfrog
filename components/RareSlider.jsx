import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Slider1 from "../assets/png/slider1.png";
// import Slider2 from "../assets/png/slider2.png";
// import Slider3 from "../assets/png/slider3.png";
// import Slider4 from "../assets/png/slider4.png";
// import Slider5 from "../assets/png/slider5.png";
// import Slider6 from "../assets/png/slider6.png";
// import Slider7 from "../assets/png/slider7.png";
// import Slider8 from "../assets/png/slider8.png";
// import Slider9 from "../assets/png/slider9.png";
// import Slider10 from "../assets/png/slider10.png";
// import Slider11 from "../assets/png/slider11.png";
// import Slider12 from "../assets/png/slider12.png";
// import Slider13 from "../assets/png/slider13.png";
// import SliderImg from "../assets/png/sliderfirstimg.png";
// import SliderImg2 from "../assets/png/rare2.png";
// import PrevImg from "../assets/png/prev.png";
// import NextImg from "../assets/png/next.png";
import Slider from "react-slick";

const RareSlider = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="overflow-hidden">
        <div className="container mb-5 position-relative pe-0">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center  main-heading kanit-font-family max-width-335 pb-4">
              GALLERY
            </h1>
          </div>
          <div className="row ">
            <div className="col ">
              <img
                className="w-100 rare-img1"
                src="/png/sliderfirstimg.png"
                alt="SliderImg"
              />
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className=" bg-transparent border-0 next-arrow"
                >
                  <span>
                    <img src="/png/prev.png" alt="sliderarrow" />
                  </span>
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className=" bg-transparent border-0 prev-arrow"
                >
                  <span>
                    {" "}
                    <img src="/png/next.png" alt="sliderarrow" />
                  </span>
                </button>
              </div>
              <img
                className="w-100 rare-img2"
                src="/png/rare2.png"
                alt="SliderImg"
              />
            </div>
          </div>
          <Slider
            {...settings}
            ref={slider}
            className="rare-slider position-relative "
          >
            <div
              className="rare-img px-sm-3 ps-2"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider1.png"
                alt="Rare1"
              />
            </div>
            <div
              className="rare-img px-sm-3 ps-2"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider2.png"
                alt="Rare1"
              />
            </div>
            <div
              className="rare-img px-sm-3 ps-2"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider3.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider4.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider5.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider6.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider7.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider8.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider9.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 ps-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider10.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider11.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider12.png"
                alt="Rare1"
              />
            </div>
            <div className="rare-img px-sm-3 px-2">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/png/slider13.png"
                alt="Rare1"
              />
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default RareSlider;
