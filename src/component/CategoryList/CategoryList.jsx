import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ handleToggle, p, title }) => {
  const categories = [
    { url: "/webdevelopment", name: "web development" },
    { url: "/mobiledevelopment", name: "mobile development" },
    { url: "/accounting", name: "accounting" },
    { url: "/videoediting", name: "video editing" },
    { url: "/databases", name: "data bases" },
    { url: "/basics", name: "basics" },
    { url: "/graphicdesign", name: "graphic design" },
  ];
  return (
    <>
      <ul className={`py-2 flex ${p} gap-y-1 flex-col`}>
        {title && (
          <span className="text-gray-500 font-bold capitalize">{title}</span>
        )}
        {categories &&
          categories.map((category, id) => (
            <li
              key={id}
              className="list-none dark:text-slate-400 text-lg capitalize"
            >
              <Link
                onClick={handleToggle && handleToggle}
                to={`/courses${category.url}`}
                className="duration-300 hover:text-main dark:hover:text-sky-500"
              >
                {category.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryList;
