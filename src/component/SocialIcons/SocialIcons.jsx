import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  const Links = [
    {
      link: "https://www.facebook.com",
      icon: <FaFacebook />,
      bg: "bg-blue-700",
    },
    {
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
      bg: "bg-blue-500",
    },
    {
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
      bg: "bg-rose-500",
    },
    {
      link: "https://x.com",
      icon: <FaTwitter />,
      bg: "bg-sky-400",
    },
  ];
  return (
    <ul className="flex my-3 gap-5">
      {Links &&
        Links.map((link, id) => (
          <li
            key={id}
            className={`h-12 w-12 flex items-center justify-center ${link.bg} rounded-full`}
          >
            <Link to={`${link.link}`} target="_blank" rel="noreferrer">
              <span className="text-white text-2xl">{link.icon}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SocialIcons;
