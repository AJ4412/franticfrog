import React from "react";
// import logo from "../../assets/png/logo.png";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-section pt-5">
      <img
        onClick={() => scrollTop()}
        className="d-block mx-auto pt-5 mt-4 header-hover cursor-pointer"
        src="/png/logo.png"
        alt="logo"
      />
      <div className="border-line mt-4"></div>
      <p className="mb-0 py-4 text-center small-text opacity-07 montserrat-font-family">
        NERVOUS GORILLA FACE TEAM
      </p>
    </div>
  );
};

export default Footer;
