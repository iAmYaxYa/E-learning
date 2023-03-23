import React from "react";

const StudentSkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((student, i) => (
      <div
        key={i}
        className="md:flex animate-pulse bg-gray-100 shadow-md dark:shadow-slate-500 rounded-xl p-8 md:p-0
                   dark:bg-slate-800 w-full lg:w-[49%]"
      >
        <div className="w-24 h-24 md:w-48 md:h-[250px] bg-skeleton dark:bg-slate-600 md:rounded-none rounded-full mx-auto"></div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div className="md:w-96 b flex flex-col gap-3  md:items-start items-center justify-center md:justify-start">
            <p className="bg-skeleton h-4 w-full dark:bg-slate-600"></p>
            <p className="bg-skeleton h-4 w-full dark:bg-slate-600"></p>
            <p className="bg-skeleton h-4 w-full dark:bg-slate-600"></p>
            <p className="bg-skeleton h-4 w-full dark:bg-slate-600"></p>
            <p className="bg-skeleton h-4 w-56 dark:bg-slate-600"></p>
          </div>
          <div className="my-3 flex flex-col gap-3 md:items-start items-center justify-center md:justify-start">
            <div className="bg-skeleton h-4 w-40 rounded-lg dark:bg-slate-600"></div>
            <div className="bg-skeleton h-4 w-28 rounded-lg dark:bg-slate-600"></div>
          </div>
        </div>
      </div>
    ));
};

export default StudentSkeleton;
