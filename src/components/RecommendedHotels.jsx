import React, { useEffect, useMemo, useState } from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedHotels = () => {
  const { rooms, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const normalize = (v) =>
    String(v ?? "")
      .trim()
      .toLowerCase();

  const searchedNormalized = useMemo(
    () => searchedCities.map(normalize),
    [searchedCities],
  );

  useEffect(() => {
    const filteredHotels = rooms
      .slice()
      .filter((room) =>
        searchedNormalized.includes(normalize(room?.hotel?.city)),
      );

    setRecommended(filteredHotels);
  }, [rooms, searchedNormalized]);

  // ✅ Hech narsa topilmasa umuman section ko'rinmasin
  if (recommended.length === 0) return null;

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Recommended Hotels"
        subTitle="A refined selection of world-class destinations where comfort, design, and experience come together."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full max-w-6xl">
        {recommended.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedHotels;
