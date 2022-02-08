import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import CelebrityImg from "../assets/png/celebrity.png";
const Celebrity = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    autoplay: true,

    autoplaySpeed: 3500,

    slidesToShow: 4,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container my-5">
      <h1 className="text-center  main-heading kanit-font-family  pb-sm-4 mb-sm-0 mb-2">
        CELEBRITY COLLABORATIONS
      </h1>

      <div className="d-flex justify-content-center flex-column align-items-center py-sm-4 py-2">
        <p className="small-text opacity-07 text-center max-width-517 ">
          We are always looking for mutually beneficial partnerships and
          collaborations.
        </p>
        <p className="small-text opacity-07 text-center max-width-975">
          If you are a company,celebrity or influencer interested in
          collaborating with us, contact us on email :{" "}
          <a
            className="text-white text-decoration-none"
            href="mailto:contact@NGFTofficial.com"
          >
            contact@NGFTofficial.com
          </a>
        </p>
      </div>
      <Slider {...settings} className="team-slider position-relative ">
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>

          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
        <div className="rare-img px-sm-3 px-2">
          <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
          <p className="small-heading pt-2">CHARLES LECLERC</p>
          <div className="my-3">
            <img className="w-100 " src="/png/celebrity.png" alt="Rare1" />
            <p className="small-heading pt-2">CHARLES LECLERC</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Celebrity;
