import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  const imageSrc = room?.images?.[0];
  const hotelName = room?.hotel?.name ?? "Hotel";
  const hotelAddress = room?.hotel?.address ?? "";

  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="
        relative max-w-70 w-full rounded-xl overflow-hidden
        bg-white text-gray-500/90
        shadow-[0px_4px_4px_rgba(0,0,0,0.05)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Image wrapper */}
      <div className="group relative overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={hotelName}
            className="
              w-full h-48 object-cover
              transition-all duration-300 ease-out
              group-hover:scale-105
            "
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}

        {/* image overlay */}
        <div
          className="
            absolute inset-0 bg-black/10 opacity-0
            group-hover:opacity-100 transition-opacity duration-300
          "
        />

        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full z-10">
            Best Seller
          </p>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {hotelName}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <img src={assets.starIconFilled} alt="star-icon" className="h-4" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <img src={assets.locationIcon} alt="location-icon" className="h-4" />
          <span>{hotelAddress}</span>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div className="flex items-end gap-1">
            <span className="text-xl font-semibold text-gray-800">
              ${room.pricePerNight}
            </span>
            <span className="text-sm text-gray-500">/night</span>
          </div>

          <button
            type="button"
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
