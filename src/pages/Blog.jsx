import React, { useEffect } from "react";

// 🔹 Blog rasmlari
import blog1 from "../assets/1.jpg";
import blog2 from "../assets/2.jpg";
import blog3 from "../assets/3.jpg";
import blog4 from "../assets/4.jpg";

const blogPosts = [
  {
    id: 1,
    image: blog1,
    date: "Jan 11, 2026",
    title: "Top Travel Destinations for 2026",
    excerpt:
      "Discover the most exciting travel destinations you should add to your list this year.",
  },
  {
    id: 2,
    image: blog2,
    date: "Jan 12, 2026",
    title: "How to Choose the Perfect Hotel",
    excerpt:
      "Practical tips to help you find the best hotel that matches your travel style.",
  },
  {
    id: 3,
    image: blog3,
    date: "Jan 13, 2026",
    title: "Luxury vs Budget Stays",
    excerpt:
      "Is luxury always worth it? Let’s compare premium and budget accommodations.",
  },
  {
    id: 4,
    image: blog4,
    date: "Jan 14, 2026",
    title: "Travel Smarter with QuickStay",
    excerpt:
      "Learn how QuickStay helps you book smarter, faster, and more comfortably.",
  },
];

const Blog = () => {
  // ✅ Page ochilganda avtomatik tepaga scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="font-playfair text-4xl md:text-[40px]">Blog</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2">
          Updates, travel inspiration, and product news from QuickStay.
        </p>

        {/* Blog Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <p className="text-xs text-gray-500">{post.date}</p>

                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>

                <button
                  className="mt-4 text-sm font-semibold text-gray-900
                             underline underline-offset-4 hover:text-black cursor-pointer"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
