import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  // ✅ PATH’lar to‘g‘rilandi
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" }, // keyin alohida page bo‘lsa o‘zgartirasiz
    { name: "About", path: "/about" }, // ✅ endi navbar ham about’ga olib boradi
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn, signOut } = useClerk();
  const location = useLocation();
  const { user, navigate, isOwner, setShowHotelReg } = useAppContext();

  useEffect(() => {
    // Home emas bo‘lsa navbar “scrolled” holatda tursin
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md text-gray-700 py-3 md:py-4"
            : "py-4 md:py-6 text-white"
        }`}
    >
      {/* Logo */}
      <Link to="/" onClick={goTop}>
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 transition-all ${
            isScrolled ? "invert opacity-90" : ""
          }`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={goTop}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <span
              className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-700" : "bg-white"
              }`}
            />
          </Link>
        ))}

        {user && (
          <button
            onClick={() =>
              isOwner ? navigate("/owner") : setShowHotelReg(true)
            }
            className={`border px-4 py-1 text-sm font-light rounded-full transition-all ${
              isScrolled ? "text-black border-black" : "text-white border-white"
            }`}
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-7 transition-all ${isScrolled ? "invert" : ""}`}
        />

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => {
                  navigate("/my-bookings");
                  goTop();
                }}
              />
              <UserButton.Action
                label="Sign out"
                onClick={() => {
                  localStorage.setItem("justSignedOut", "1");
                  localStorage.removeItem("qs_auth_state");
                  signOut();
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => {
                  navigate("/my-bookings");
                  goTop();
                }}
              />
              <UserButton.Action
                label="Sign out"
                onClick={() => {
                  localStorage.setItem("justSignedOut", "1");
                  localStorage.removeItem("qs_auth_state");
                  signOut();
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}

        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 font-medium transition-all duration-500 md:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <img src={assets.closeIcon} alt="close" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => {
              setIsMenuOpen(false);
              goTop();
            }}
          >
            {link.name}
          </Link>
        ))}

        {user && (
          <button
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
            onClick={() =>
              isOwner ? navigate("/owner") : setShowHotelReg(true)
            }
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
