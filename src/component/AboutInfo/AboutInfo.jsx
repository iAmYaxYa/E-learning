import React from "react";

const AboutInfo = ({ inf }) => {
  return (
    <div className="w-[46%] md:w-[30%] text-center">
      <h1 className="text-5xl text-main font-bold dark:text-sky-500">
        {inf.total}
      </h1>
      <span
        className="text-lg font-base text-center capitalize
            text-slate-500 dark:text-slate-300"
      >
        {inf.name}
      </span>
    </div>
  );
};

export default AboutInfo;
