import React, { useState } from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const trimmed = email.trim();

    if (!trimmed) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("You’re subscribed successfully 🎉");
    setEmail("");
  };

  return (
    <div className="bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="logo"
            className="mb-4 h-8 md:h-9 invert opacity-80"
          />
          <p className="text-sm">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <img
              src={assets.instagramIcon}
              alt="instargram-icon"
              className="w-6 cursor-pointer transition-all duration-200 ease-out opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
            />
            <img
              src={assets.facebookIcon}
              alt="facebook-icon"
              className="w-6 cursor-pointer transition-all duration-200 ease-out opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
            />
            <img
              src={assets.twitterIcon}
              alt="twitter-icon"
              className="w-6 cursor-pointer transition-all duration-200 ease-out opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
            />
            <img
              src={assets.linkendinIcon}
              alt="linkend-icon"
              className="w-6 cursor-pointer transition-all duration-200 ease-out opacity-80 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
            />
          </div>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Safety Information
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Cancellation Options
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>

          <div className="flex items-center mt-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button
              onClick={handleSubscribe}
              className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r cursor-pointer
              transition-all duration-300 ease-out
              hover:scale-105
              active:scale-95"
            >
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="w-3.5 invert"
              />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
            >
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
