import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckOutHeader = ({ title }) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center w-full bg-white dark:bg-slate-900 justify-between px-4 sm:px-10 py-3 shadow-md dark:shadow-slate-600">
      <Link
        className="text-main dark:text-white capitalize
                 font-bold text-4xl"
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
      <div>
        <Link to={`/course/${title}`}>
          <FaTimes className="dark:text-white text-3xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default CheckOutHeader;
