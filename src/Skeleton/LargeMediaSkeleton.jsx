import React from "react";

const LargeMediaSkeleton = () => {
  return (
    <div className="shadow animate-pulse dark:shadow-slate-400 hidden lg:block z-20 fixed top-24 right-20 w-[25%]">
      <div className="w-full h-[200px] bg-skeleton dark:bg-slate-600"></div>
      <div className="p-4">
        <div className="flex items-center">
          <h1 className="w-56 rounded-2xl my-3 h-10 bg-skeleton dark:bg-slate-600"></h1>
          <h1
            className="text-lg ml-3 line-through text-gray-500
                    dark:text-gray-300"
          ></h1>
        </div>
        <button className="w-full bg-skeleton my-3 dark:bg-slate-600 h-12 rounded"></button>
        <p className="w-40 mx-auto flex bg-skeleton my-3 dark:bg-slate-600 h-4 rounded-lg"></p>
      </div>
    </div>
  );
};

export default LargeMediaSkeleton;
