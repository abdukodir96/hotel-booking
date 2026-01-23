import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Unlock limited-time deals and carefully crafted packages designed to elevate your stay and create lasting memories."
        />

        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12 relative">
          <span className="relative">
            View All Offers
            <span
              className="
        absolute left-0 -bottom-1 h-0.5 w-0
        bg-black
        transition-all duration-300
        group-hover:w-full
      "
            />
          </span>

          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-20 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center
            transition-all duration-300 ease-out
            hover:scale-[1.02] hover:shadow-2xl
            after:absolute after:inset-0 after:bg-black/10
            after:opacity-0 group-hover:after:opacity-100
            after:transition-opacity after:duration-300"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full z-10">
              {item.priceOff}% OFF
            </p>

            <div className="relative z-10">
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>

            <button className="relative z-10 flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt="arrow-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
