import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import VideoSection from "../components/VideoSection";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <VideoSection />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
