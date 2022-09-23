import React from "react";
// import MerchImg from "../assets/png/merch.png";

const Merch = () => {
  return (
    <div className="container" id="merch">
      <div>
        <div
          className="my-auto text-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="main-heading text-center kanit-font-family mb-sm-0 mb-3">
            MERCH
          </h1>
        </div>
        <div
          className="mt-4"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img className="w-100" src="/png/merch.png" alt="MerchImg" />
        </div>
        <p className="small-text mt-2 montserrat-font-family opacity-07 pe-sm-5">
            Here is the soft opening of our merchandise store.  If you would like to make a purchase, please email us at frankie@franticfrog.xyz{" "}
            {/* <a
              className=" text-white"
              href=" https://instagram.com/aleksandar94art?utm_medium=copy_link "
              target="_blank"
            >
              @aleksandar94art
            </a> */}
          </p>
      </div>
    </div>
  );
};

export default Merch;
