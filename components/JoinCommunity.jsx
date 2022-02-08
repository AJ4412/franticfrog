import React from "react";

import Link from "next/link";
import { withRouter } from "next/router";
// import joinimg from "../assets/png/community.png";
import { JoinDiscordIcon } from "./common/Icons";

const JoinCommunity = () => {
  return (
    <div className="join-community-section mt-5 " id="contact">
      <div className="container">
        <div className="row">
          <div className="col-6 my-auto py-3 ps-3 ps-sm-4 ">
            <h1 className="community-text kanit-font-family text-start mb-0">
              Join Our Community
            </h1>

            <Link
              href={{
                pathname: "https://discord.gg/CSpah2M9cp",
              }}
              target="_blank"
            >
              <a>
                <button className="discord-button py-sm-2 py-1  px-sm-4 px-3 montserrat-font-family mt-sm-3 mt-2">
                  <span>
                    <JoinDiscordIcon />
                  </span>{" "}
                  Join Discord
                </button>
              </a>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <img className="w-100 " src="/png/community.png" alt="joinimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(JoinCommunity);
