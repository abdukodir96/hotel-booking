import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import VideoSection from "../components/VideoSection";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import RecommendedHotels from "../components/RecommendedHotels";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { searchedCities } = useAppContext();
  const hasSearch = searchedCities.length > 0;

  return (
    <>
      <Hero />

      {hasSearch && <RecommendedHotels />}

      <FeaturedDestination />
      <ExclusiveOffers />
      <VideoSection />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
