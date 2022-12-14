import React from "react";
// import logo from "../../assets/png/logo.png";

const Footer = () => {

  function contractadd(){
    location.replace("https://polygonscan.com/address/0xbb45c37a3e97433b0483300c8ed2749b9a08c6a2")
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-section">
      <img
        onClick={() => scrollTop()}
        className="d-block mx-auto pt-4 mt-0 header-hover cursor-pointer"
        src="/png/logo.png"
        alt="logo"
      />
      <div className="border-line mt-4"></div>
      <p className="mb-0 py-4 text-center small-text opacity-07 montserrat-font-family">Contract address (Polygon):</p>
      <p onClick={contractadd} className="mb-0 py-4 text-center small-text opacity-07 montserrat-font-family">0xbB45C37a3E97433b0483300c8Ed2749b9A08c6A2</p>
      <p className="mb-0 py-4 text-center small-text opacity-07 montserrat-font-family">

        FRANTIC FROG&apos;S TEAM
      </p>
    </div>
  );
};

export default Footer;
