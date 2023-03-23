import React from "react";

const ListSkeleton = () => {
  return (
    <div className="px-4 animate-pulse sm:px-10 py-10">
      <div className={`w-full lg:w-[50%]`}>
        <h1 className="bg-skeleton dark:bg-slate-600 w-44 h-8 mb-5 rounded-2xl"></h1>
        <ul
          className={`items-center flex flex-wrap mt-4 gap-3 justify-between`}
        >
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
          <li className="bg-skeleton dark:bg-slate-600 w-full lg:w-[48%] h-4 rounded-lg"></li>
        </ul>
      </div>
    </div>
  );
};

export default ListSkeleton;
