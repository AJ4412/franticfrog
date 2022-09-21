import React, { useState, useEffect } from "react";
import Head from 'next/head';
// import "../assets/style/common.css";

import Home from "../components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Switch } from "react-router-dom";
// import logo from "../assets/png/loading.png";
import { UpArrowIcon } from "../components/common/Icons";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Main() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/png/loading1 (2).png" />
        <title>Frantic Frog</title>
        <meta name='description' content='Frantic Frog is a collection of 10,000 unique Frantic Frog NFTs featuring Frankie, The Frantic Frog amiably known in the community as F Cube. Glide and slippity slide into the NFT tide. Come along for the ride and join the F Cube frantic side.' />
      </Head>

      <div>
        {
          loading ? (
            <Home />
          ) : (
            <div className="d-flex justify-content-center align-items-center loading flex-column">
              <img className="loading-img" src="/png/loading.gif" alt="logo" />

              <img className="loading-img" src="/png/loading.png" alt="logo" />
            </div>
          )
        }
        {showButton ? (
          <div
            className="topscroll d-flex justify-content-center align-items-center cursor-pointer"
            onClick={() => scrollTop()}
          >
            <UpArrowIcon />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
