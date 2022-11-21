import React, { useEffect, useState, useContext, createContext } from "react";
// import { useScreenFixedProvider } from "../context/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
// import logo from "../../assets/png/logo.png";
import Link from "next/link";
import { withRouter } from "next/router";

import {
  InstagramIcon,
  ShipIcon,
  TwitterIcon,
  DiscordIcon,
} from "../common/Icons";
import { FacebookOutlined } from "@mui/icons-material";
const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  // const { showOverlay, setShowOverlay } = useScreenFixedProvider();
  const [scrollPosition, setScrollPosition] = useState(0);
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ScrollGallery = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div style={{ height: "80px" }}>
      <section
        className={`${scrollPosition > 200 || showOverlay ? "transparent" : "black "
          } d-flex w-100 navbar-wrapper justify-content-center py-sm-2 py-2`}
      >
        <Desktop>
          <div className="px-0">
            <div className="d-flex align-items-center justify-content-between gap-5 leftSide">
              <div>
                <img
                  className="cursor-pointer mx-3"
                  onClick={() => scrollTopHandler()}
                  src="/png/logo.png"
                  alt="logo"
                />
                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#history">MEET FRANTIC FROG</a>
                </li>

                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#gallery">GALLERY</a>
                </li>

                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#merch">MERCH</a>
                </li>

                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#roadmap">ROADMAP</a>
                </li>

                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#team">TEAM</a>
                </li>

                <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="#contact">CONTACT</a>
                </li>

                {/* <li className="mx-2 nav-list-items p-2 d-inline-block cursor-pointer  montserrat-font-family">
                  <a href="https://polygonscan.com/address/0xbb45c37a3e97433b0483300c8ed2749b9a08c6a2">CONTRACT</a>
                </li> */}
              </div>
              <div className="rightSide">
                <Link
                  href={{
                    pathname: "https://discord.gg/DTaXpmm2",
                  }}
                  target="_blank"
                >
                  <a href="https://discord.gg/DTaXpmm2">
                    <span className="mx-2">
                      <DiscordIcon />
                    </span>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: "https://www.instagram.com/frankiefranticfrog/",
                  }}
                  target="_blank"
                >
                  <a href="https://www.instagram.com/frankiefranticfrog/">
                    <span className="mx-2">
                      <InstagramIcon />
                    </span>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: "https://www.facebook.com/profile.php?id=100086427944468",
                  }}
                  target="_blank"
                >
                  <a href="https://www.facebook.com/profile.php?id=100086427944468">
                    <span className="mx-2">
                      <FacebookOutlined style={{ fontSize: "36px", color: "black" }} />
                    </span>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: "https://twitter.com/frankie_frantic",
                  }}
                  target="_blank"
                >
                  <a href="https://twitter.com/frankie_frantic">
                    <span className="mx-2">
                      <TwitterIcon />
                    </span>
                  </a>
                </Link>

                <Link
                  href={{
                    pathname: "https://opensea.io/collection/frantic-frog",
                  }}
                  target="_blank"
                >
                  <a href="https://opensea.io/collection/frantic-frog">
                    <span className="mx-2">
                      <ShipIcon />
                    </span>
                  </a>
                </Link>

                <Link
                  href={{
                    pathname: "https://www.tiktok.com/@frankie_frantic?lang=en",
                  }}
                  target="_blank"
                >
                  <a href="https://www.tiktok.com/@frankie_frantic?lang=en">
                    <span className="mx-2">
                      <img src="tiktok.png" width="35px" height="35px" />
                    </span>
                  </a>
                </Link>

                <Link
                  href={{
                    pathname: "https://www.pinterest.co.uk/FrankieFranticFrog/",
                  }}
                  target="_blank"
                >
                  <a href="https://www.pinterest.co.uk/FrankieFranticFrog/">
                    <span className="mx-2">
                      <img src="pinterest.png" width="35px" height="35px" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Desktop>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column text-center ">
                <ul className="p-0">
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#history"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >MEET FRANTIC FROG
                      </a>
                    </span>
                  </li>

                  <li className=" transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#gallery"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        GALLERY
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#merch"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        MERCH
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        ROADMAP
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#team"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        TEAM
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#contact"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        CONTACT
                      </a>
                    </span>
                  </li>
                  {/* <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden  montserrat-font-family">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="https://etherscan.io/address/0x34b298f03120ca3ecff04e5bfebccf3550baca56"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        CONTRACT
                      </a>
                    </span>
                  </li> */}
                </ul>
                <div className="link">
                  <Link
                    href={{
                      pathname: "https://discord.gg/DTaXpmm2",
                    }}
                    target="_blank"
                  >
                    <a href="https://discord.gg/DTaXpmm2">
                      <span className="mx-2">
                        <DiscordIcon />
                      </span>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: "https://www.instagram.com/frankiefranticfrog/",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.instagram.com/frankiefranticfrog/">
                      <span className="mx-2">
                        <InstagramIcon />
                      </span>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: "https://twitter.com/frankie_frantic",
                    }}
                    target="_blank"
                  >
                    <a href="https://twitter.com/frankie_frantic">
                      <span className="mx-2">
                        <TwitterIcon />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://opensea.io/collection/frantic-frog",
                    }}
                    target="_blank"
                  >
                    <a href="https://opensea.io/collection/frantic-frog">
                      <span className="mx-2">
                        <ShipIcon />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://www.tiktok.com/@frankie_frantic?lang=en",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.tiktok.com/@frankie_frantic?lang=en">
                      <span className="mx-2">
                        <img src="tiktok.png" alt="Icon" />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://www.pinterest.co.uk/FrankieFranticFrog/",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.pinterest.co.uk/FrankieFranticFrog/">
                      <span className="mx-2">
                        <img src="pinterest.png" alt="Icon" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar h-86 navbar-expand-lg navbar-light p-sm-3 p-2 px-sm-0 w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <img
                className="logo-img cursor-pointer mx-2"
                src="/png/logo.png"
                alt="logo"
              />
              <div className="d-flex align-items-center rightSide">
                {/* {" "} */}
                <div>
                  <Link
                    href={{
                      pathname: "https://discord.gg/DTaXpmm2",
                    }}
                    target="_blank"
                  >
                    {/* {" "} */}
                    <a href='https://discord.gg/DTaXpmm2'>
                      <span className="mx-sm-2 mx-1 ">
                        <DiscordIcon />
                      </span>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: "https://www.instagram.com/frankiefranticfrog/",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.instagram.com/frankiefranticfrog/">
                      <span className="mx-sm-2 mx-1">
                        <InstagramIcon />
                      </span>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: "https://www.facebook.com/profile.php?id=100086427944468",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.facebook.com/profile.php?id=100086427944468">
                      <span className="mx-2">
                        <FacebookOutlined style={{ fontSize: "36px", color: "black" }} />
                      </span>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: "https://twitter.com/frankie_frantic",
                    }}
                    target="_blank"
                  >
                    <a href="https://twitter.com/frankie_frantic">
                      <span className="mx-sm-2 mx-1 ">
                        <TwitterIcon />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://opensea.io/collection/frantic-frog",
                    }}
                    target="_blank"
                  >
                    <a href="https://opensea.io/collection/frantic-frog">
                      <span className="mx-sm-2 mx-1 ">
                        <ShipIcon />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://www.tiktok.com/@frankie_frantic?lang=en",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.tiktok.com/@frankie_frantic?lang=en">
                      <span className="mx-sm-2 mx-1 ">
                        <img src="tiktok.png" width="35px" height="35px" />
                      </span>
                    </a>
                  </Link>

                  <Link
                    href={{
                      pathname: "https://www.pinterest.co.uk/FrankieFranticFrog/",
                    }}
                    target="_blank"
                  >
                    <a href="https://www.pinterest.co.uk/FrankieFranticFrog/">
                      <span className="mx-sm-2 mx-1 ">
                        <img src="pinterest.png" width="35px" height="35px" />
                      </span>
                    </a>
                  </Link>
                </div>
                <div
                  className={`${showOverlay ? "animate" : ""
                    } position-relative navbarwrapper  hamburger-icon d-flex flex-column ms-2 d-lg-none`}
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
      </section>
    </div>
  );
};

export default withRouter(Navbar);
