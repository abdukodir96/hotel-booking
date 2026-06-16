import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const Loader = () => {
  const { navigate, axios, getToken } = useAppContext();
  const { nextUrl } = useParams();

  useEffect(() => {
    const verify = async () => {
      const bookingId = localStorage.getItem("pendingBookingId");

      if (bookingId) {
        try {
          await axios.post(
            "/api/bookings/verify-payment",
            { bookingId },
            { headers: { Authorization: `Bearer ${await getToken()}` } },
          );
        } catch (e) {
          console.log("verify error:", e.message);
        }
        localStorage.removeItem("pendingBookingId");
      }

      setTimeout(() => {
        navigate(`/${nextUrl}`);
      }, 2000);
    };

    if (nextUrl) verify();
  }, [nextUrl]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary"></div>
    </div>
  );
};

export default Loader;
