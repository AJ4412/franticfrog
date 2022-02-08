// import React from "react";
import Celebrity from "./Celebrity";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Hero from "./Hero";
import JoinCommunity from "./JoinCommunity";
import Merch from "./Merch";
import NervousGorilla from "./NervousGorilla";
import RareSlider from "./RareSlider";
import RoadMap from "./RoadMap";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NervousGorilla />
      <RareSlider />
      <RoadMap />
      <Merch />
      <Celebrity />
      <Team />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Home;
