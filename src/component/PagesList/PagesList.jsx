import React from "react";
import { NavLink } from "react-router-dom";

const PagesList = ({ handleToggle, p, title, b }) => {
  const pages = [
    { url: "/", name: "home" },
    { url: "/courses", name: "courses" },
    { url: "/about", name: "about" },
    { url: "/contact", name: "contact" },
  ];
  return (
    <>
      <ul
        className={`py-3 flex ${p} gap-y-1 ${b} dark:border-slate-500 flex-col`}
      >
        {title && (
          <span className="text-gray-500 font-bold capitalize">{title}</span>
        )}
        {pages &&
          pages.map((page, id) => (
            <li
              key={id}
              className="list-none dark:text-slate-400 text-lg capitalize"
            >
              <NavLink
                onClick={handleToggle && handleToggle}
                to={`${page.url}`}
                className="duration-300 hover:text-main dark:hover:text-sky-500"
              >
                {page.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PagesList;
