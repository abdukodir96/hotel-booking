import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

const AUTH_KEY = "qs_auth_state";

const AuthToasts = () => {
  const { isSignedIn, user } = useUser();

  // ✅ Profile update toast uchun snapshot
  const prevProfile = useRef(null);

  // ✅ Security/Password ajratish uchun snapshotlar
  const prevUpdatedAt = useRef(null);
  const prevPasswordEnabled = useRef(null);

  // ✅ Logout redirect/reload bo‘lsa ham toast chiqishi uchun (flag-check)
  useEffect(() => {
    const justSignedOut = localStorage.getItem("justSignedOut");
    if (justSignedOut === "1") {
      toast("Logged out successfully");
      localStorage.removeItem("justSignedOut");
    }
  }, []);

  // ✅ Login / Signup / Logout toast (refreshda chiqmasin)
  useEffect(() => {
    const prevAuth = localStorage.getItem(AUTH_KEY);

    // Login yoki Signup - faqat bir marta
    if (!prevAuth && isSignedIn && user) {
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

      localStorage.setItem(AUTH_KEY, "signed_in");
    }

    // Logout - faqat real logout bo‘lganda
    if (prevAuth && !isSignedIn) {
      toast("Logged out successfully");
      localStorage.removeItem(AUTH_KEY);

      // snapshotlarni tozalaymiz
      prevProfile.current = null;
      prevUpdatedAt.current = null;
      prevPasswordEnabled.current = null;
    }
  }, [isSignedIn, user]);

  // ✅ Profile / Password / Security update toast
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

    // birinchi marta kelganda snapshot saqlaymiz (toast chiqarmaymiz)
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

    if (profileChanged) {
      toast.success("Profile updated successfully ✅");
      prevProfile.current = currentProfile;
    }

    if (
      updatedAtChanged &&
      !profileChanged &&
      prevPasswordEnabled.current !== user.passwordEnabled
    ) {
      toast.success("Password updated successfully 🔒");
    }

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

  return null;
};

export default AuthToasts;
