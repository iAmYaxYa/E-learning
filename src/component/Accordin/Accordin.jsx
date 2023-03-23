import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordin = ({ header, content, setSource }) => {
  const [showContent, setShowContent] = useState(false);
  const changeVideo = (e) => {
    const src = content.find((cont, i) => i === e);
    setSource(src.src);
  };

  return (
    <>
      <li
        onClick={() => setShowContent(!showContent)}
        className="flex items-center justify-between flex-wrap bg-neutral-100 dark:bg-slate-800 dark:border-slate-600 p-4 border  cursor-pointer"
      >
        <div className="flex items-center justify-between lg:justify-start lg:gap-5  basis-full lg:basis-[70%]">
          <h2 className="dark:text-slate-300 text-lg">{header}</h2>
          <span>
            <FaAngleDown
              className={
                showContent
                  ? "rotate-180 duration-300 dark:text-slate-300"
                  : "dark:text-slate-300 rotate-0 duration-300"
              }
            />
          </span>
        </div>
        <div className="basis-full sm:basis-[20%]">
          <h2 className="text-sm dark:text-slate-300">0 / 15 | 2min</h2>
        </div>
      </li>
      {showContent && (
        <ul className="flex flex-col gap-1">
          {content.map((content, i) => (
            <li
              onClick={() => changeVideo(i)}
              key={content.id}
              className="flex gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-700"
            >
              <input type="checkbox" className="cursor-pointer" />
              <h2 className="text-lg text-slate-600 pointer-events-none dark:text-slate-300">
                <span className="pointer-events-none">{i + 1}. </span>
                <span className="pointer-events-none">{content.title}</span>
              </h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Accordin;
