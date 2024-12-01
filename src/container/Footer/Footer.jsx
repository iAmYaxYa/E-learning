import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryList, PagesList, SocialIcons } from "../../component";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const links = ["courses", "about", "contact"];
  return (
    <div className="w-full bg-neutral-100 dark:bg-slate-800">
      <div className="flex justify-between flex-wrap gap-5 px-4 sm:px-10 py-10">
        <div className="w-full lg:w-[23%] md:w-[48%]">
          <Link
            className="text-sky-500 dark:text-white capitalize
                 font-bold text-3xl"
            to="/"
          >
            Ud
            <span
              className="text-slate-900
                  dark:text-sky-500"
            >
              emy.
            </span>
          </Link>
          <p className="py-3 text-slate-700 dark:text-slate-300 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            architecto accusamus quam itaque necessitatibus! Neque!
          </p>
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]">
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
            categories
          </h1>
          <CategoryList />
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]">
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
            links
          </h1>
          <PagesList />
        </div>

        <div className="w-full lg:w-[23%] md:w-[48%]">
          <h1
            className="text-slate-900 dark:text-white capitalize
                 font-bold text-3xl"
          >
            get in touch
          </h1>
          <div className="py-3">
            <div className="relative w-full border border-slate-400 dark:border-slate-500 rounded">
              <input
                type="text"
                className="w-full p-3 rounded outline-0 dark:bg-slate-800 dark:text-white"
                placeholder="Enter Your Email"
              />
              <span
                className="absolute right-0 top-0 flex items-center
               justify-center bg-main dark:bg-sky-500 text-white cursor-pointer h-full w-14 text-lg"
              >
                Go
              </span>
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="w-full py-5 border-t border-slate-400 dark:border-slate-500 text-center">
        <p className="text-xl text-slate-900 dark:text-white">
          &copy;2023 YahYa.
        </p>
      </div>
    </div>
  );
};

export default Footer;
