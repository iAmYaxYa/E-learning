import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full dark:bg-slate-900 fixed top-0 left-0 bg-white z-10 flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-slate-500 text-7xl font-medium dark:text-slate-300">
          404
        </h1>
        <h3 className="text-4xl text-center sm:text-left dark:text-white">
          We can't find the page you're looking for
        </h3>
        <span className="text-center dark:text-white">
          Visit our {""}
          <Link
            to="/"
            className="underline text-main dark:text-sky-500 text-xl"
          >
            home page
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
