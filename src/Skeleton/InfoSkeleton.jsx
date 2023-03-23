import React from "react";

const InfoSkeleton = () => {
  return (
    <div className="w-[46%] animate-pulse md:w-[30%] flex flex-col justify-center items-center gap-3">
      <h1 className="bg-skeleton h-10 w-44 rounded-2xl dark:bg-slate-600"></h1>
      <span className="bg-skeleton h-4 rounded-lg w-20 dark:bg-slate-600"></span>
    </div>
  );
};

export default InfoSkeleton;
