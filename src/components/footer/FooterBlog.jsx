import React from "react";
import { Link } from "react-router-dom";

const FooterBlog = () => {
  return (
    <Link
      to="/blog"
      className="transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-4 decoration-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded"
    >
      Blog
    </Link>
  );
};

export default FooterBlog;
