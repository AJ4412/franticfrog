import React from "react";
// import MerchImg from "../assets/png/merch.png";

const Merch = () => {
  return (
    <div className="container" id="merch">
      <div className="row">
        <div
          className="col-sm-7 my-auto"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="main-heading text-center text-sm-start kanit-font-family mb-sm-0 mb-3">
            MERCH
          </h1>
          <p className="small-text montserrat-font-family opacity-07 pe-sm-5">
            This jacket is the first product of the NGFT Merchandise. Owning a
            @nervousgorillafaceteam NFT you have opportunity to get one of hand
            painted jacket with your own gorilla face on it. Created by our
            teammate and good friend{" "}
            <a
              className=" text-white"
              href=" https://instagram.com/aleksandar94art?utm_medium=copy_link "
              target="_blank"
            >
              @aleksandar94art
            </a>
          </p>
        </div>
        <div
          className="col-sm-5  "
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img className="w-100" src="/png/merch.png" alt="MerchImg" />
        </div>
      </div>
    </div>
  );
};

export default Merch;
