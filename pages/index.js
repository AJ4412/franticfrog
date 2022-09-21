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
      <div>
        {
          loading ? (
            <Home />
          ) : (
            <div className="d-flex justify-content-center align-items-center loading flex-column">
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
