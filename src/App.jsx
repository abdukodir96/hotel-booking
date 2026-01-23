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

  // ✅ Profile update toast uchun snapshot
  const prevProfile = useRef(null);

  // ✅ Security/Password ajratish uchun snapshotlar
  const prevUpdatedAt = useRef(null);
  const prevPasswordEnabled = useRef(null);

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
      // ✅ logout bo‘lsa snapshotlarni tozalab qo‘yamiz
      prevProfile.current = null;
      prevUpdatedAt.current = null;
      prevPasswordEnabled.current = null;
    }

    prevSignedIn.current = isSignedIn;
  }, [isSignedIn, user]);

  // ✅ Profile / Password / Security update bo‘lganda toast
  useEffect(() => {
    if (!user) {
      prevProfile.current = null;
      prevUpdatedAt.current = null;
      prevPasswordEnabled.current = null;
      return;
    }

    const currentProfile = {
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      imageUrl: user.imageUrl ?? "",
      emails: (user.emailAddresses ?? []).map((e) => e.emailAddress).join(","),
    };

    // Birinchi marta kelganda faqat snapshot saqlaymiz (toast chiqarmaymiz)
    if (!prevProfile.current) {
      prevProfile.current = currentProfile;
      prevUpdatedAt.current = user.updatedAt;
      prevPasswordEnabled.current = user.passwordEnabled;
      return;
    }

    const prev = prevProfile.current;

    const profileChanged =
      prev.firstName !== currentProfile.firstName ||
      prev.lastName !== currentProfile.lastName ||
      prev.imageUrl !== currentProfile.imageUrl ||
      prev.emails !== currentProfile.emails;

    const updatedAtChanged =
      prevUpdatedAt.current &&
      user.updatedAt &&
      prevUpdatedAt.current !== user.updatedAt;

    // ✅ Profile update
    if (profileChanged) {
      toast.success("Profile updated successfully ✅");
      prevProfile.current = currentProfile;
    }

    // ✅ Password update (passwordEnabled o'zgargan bo'lsa)
    if (
      updatedAtChanged &&
      !profileChanged &&
      prevPasswordEnabled.current !== user.passwordEnabled
    ) {
      toast.success("Password updated successfully 🔒");
    }

    // ✅ Other security updates (sessions va h.k.)
    if (
      updatedAtChanged &&
      !profileChanged &&
      prevPasswordEnabled.current === user.passwordEnabled
    ) {
      toast.success("Security settings updated 🛡️");
    }

    prevUpdatedAt.current = user.updatedAt;
    prevPasswordEnabled.current = user.passwordEnabled;
  }, [user]);

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
