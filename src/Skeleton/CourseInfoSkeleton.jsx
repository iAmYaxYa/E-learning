import React from "react";

const CourseInfoSkeleton = () => {
  return (
    <div className="px-4 sm:px-10 animate-pulse">
      <div className="my-4 space-y-2">
        <h1 className="dark:bg-slate-600 h-12 bg-skeleton w-full lg:w-[50%]"></h1>
        <p className="w-full lg:w-[50%] dark:bg-slate-600 h-6 bg-skeleton"></p>
        <p className="w-80 dark:bg-slate-600 rounded-xl h-6 bg-skeleton"></p>
        <p className="dark:bg-slate-600 h-4 w-40 rounded-lg bg-skeleton"></p>
        <p className="dark:bg-slate-600 h-4 rounded-lg w-40 bg-skeleton"></p>
        <div className="block lg:hidden">
          <div className="flex items-center">
            <h1 className="dark:bg-slate-600 h-10 rounded-2xl my-3 w-40 bg-skeleton"></h1>
          </div>
          <p className="dark:bg-slate-600 h-4 w-60 rounded-lg bg-skeleton"></p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoSkeleton;
