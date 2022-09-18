import React from "react";

import Link from "next/link";
import { withRouter } from "next/router";
import TeamSlider from "./TeamSlider";
// import TwitterImg from "../assets/png/twitter.png";
const Team = () => {
  return (
    <div className="container" >
      <h1 id="team" className="main-heading kanit-font-family pb-3 text-center padding-top-10 mt-sm-0 ">
        TEAM
      </h1>
      <div className="d-sm-flex d-none flex-column">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team1.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                DIANE
              </h1>
              <p className="small-text opacity-07  text-center">
                CREATIVE DIRECTOR
              </p>
              {/* <div className="d-flex justify-content-center">
                {" "}
                <Link
                  to={{
                    pathname: "https://twitter.com/NGFTofficial  ",
                  }}
                  target="_blank"
                >
                   <img  
                    className="header-hover cursor-pointer"
                    src={TwitterImg}
                    alt="TwitterImg"
                  />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team2.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                EDWIN
              </h1>
              <p className="small-text opacity-07  text-center">CHIEF COOK AND BOTTLE WASHER</p>
              {/* <div className="d-flex justify-content-center">
                {" "}
                <Link
                  to={{
                    pathname: "https://twitter.com/NGFTofficial  ",
                  }}
                  target="_blank"
                >
                  <span className="px-2">
                    {" "}
                     <img  
                      className="header-hover cursor-pointer"
                      src={TwitterImg}
                      alt="TwitterImg"
                    />
                  </span>
                </Link>
                <Link
                  to={{
                    pathname: "https://discord.gg/CSpah2M9cp  ",
                  }}
                  target="_blank"
                >
                  <span className="px-2">
                    {" "}
                     <img  
                      className="header-hover cursor-pointer"
                      src={DiscordImg}
                      alt="DiscordImg"
                    />
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team3.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                FRANKIE
              </h1>
              <p className="small-text opacity-07  text-center">
                SUPER HERO
              </p>
              {/* <div className="d-flex justify-content-center">
                {" "}
                <Link
                  to={{
                    pathname: "https://twitter.com/NGFTofficial  ",
                  }}
                  target="_blank"
                >
                  <span className="px-2">
                    {" "}
                     <img  
                      className="header-hover cursor-pointer"
                      src={TwitterImg}
                      alt="TwitterImg"
                    />
                  </span>
                </Link>
                <Link
                  to={{
                    pathname: "https://discord.gg/CSpah2M9cp  ",
                  }}
                  target="_blank"
                >
                  <span className="px-2">
                    {" "}
                     <img  
                      className="header-hover cursor-pointer"
                      src={DiscordImg}
                      alt="DiscordImg"
                    />
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
          
        </div>
        <div className="row d-none justify-content-center">
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team4.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                HISAO
              </h1>
              <p className="small-text opacity-07  text-center">WEB DESIGNER</p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team2.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                THOMAS
              </h1>
              <p className="small-text opacity-07  text-center">TOKEN EXPERT</p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <div className="py-lg-4 py-2 team-hover">
              <img
                className="d-block mx-auto"
                src="/png/team3.png"
                alt="Team1"
              />
              <h1 className="team-heading kanit-font-family text-center pt-2">
                ALEC
              </h1>
              <p className="small-text opacity-07  text-center">NFT EXPERT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-none d-block">
        <TeamSlider />
      </div>
    </div>
  );
};

export default withRouter(Team);
