import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Back = ({ url, input, change }) => {
  return (
    <div className="mb-5 px-4 sm:px-10 flex flex-wrap justify-between items-center gap-5">
      <Link to={`${url}`} className="flex gap-2 items-center">
        <BsArrowLeft className="dark:text-white text-slate-900 text-xl" />
        <span className="text-2xl font-base dark:text-white text-slate-900 capitalize">
          back
        </span>
      </Link>
      {input && (
        <div className="w-full flex relative sm:w-[60%]">
          <input
            onChange={change}
            type="text"
            placeholder="What do you want to learn?"
            className="bg-transparent w-full dark:text-slate-300 p-3 outline-0 rounded border border-slate-400"
          />
          <div>
            <FaSearch className="absolute text-xl cursor-pointer text-slate-500 dark:text-slate-300 top-3.5 right-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Back;
