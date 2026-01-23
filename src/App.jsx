import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import AuthToasts from "./components/AuthToasts";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
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
        containerStyle={{ zIndex: 999999 }} // modal ustida chiqishi uchun
      />

      <AuthToasts />

      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
