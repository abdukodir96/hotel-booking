import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  const { isSignedIn, user } = useUser();
  const prevSignedIn = useRef(false);

  useEffect(() => {
    // Sign-in bo'lgan payt (login yoki signup)
    if (!prevSignedIn.current && isSignedIn && user) {
      const createdAt = user.createdAt ? new Date(user.createdAt).getTime() : 0;
      const lastSignInAt = user.lastSignInAt
        ? new Date(user.lastSignInAt).getTime()
        : 0;

      const isSignup = createdAt && lastSignInAt && createdAt === lastSignInAt;

      if (isSignup) {
        toast.success(
          `Account created successfully 🎉 Welcome${
            user.firstName ? `, ${user.firstName}` : ""
          }`,
        );
      } else {
        toast.success(
          `Login successfully${user.firstName ? `, ${user.firstName}` : ""} 👋`,
        );
      }
    }

    // Sign-out bo'lgan payt
    if (prevSignedIn.current && !isSignedIn) {
      toast("Logged out successfully");
    }

    prevSignedIn.current = isSignedIn;
  }, [isSignedIn, user]);

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
      />

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
