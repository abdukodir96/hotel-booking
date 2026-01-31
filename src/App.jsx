import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HotelReg from "./components/HotelReg";
import AuthToasts from "./components/AuthToasts";

import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";

// ✅ YANGI: Blog + About
import Blog from "./pages/Blog";
import About from "./pages/About";

// Owner panel
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";

import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("/owner");
  const { showHotelReg } = useAppContext();

  return (
    <div>
      {/* Toasts */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#111",
            color: "#fff",
          },
        }}
        containerStyle={{ zIndex: 999999 }}
      />

      <AuthToasts />

      {/* Navbar (Owner panelda ko‘rinmaydi) */}
      {!isOwnerPath && <Navbar />}

      {/* Hotel Registration Modal */}
      {showHotelReg && <HotelReg />}

      {/* Pages */}
      <div className="min-h-[70vh]">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* ✅ YANGI ROUTES */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />

          {/* Hotel Owner Panel */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>

          {/* Optional: Not Found */}
          <Route
            path="*"
            element={<div className="pt-28 px-6">Not Found</div>}
          />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
