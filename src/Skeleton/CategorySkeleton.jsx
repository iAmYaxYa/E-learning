import React from "react";

const CategorySkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((cate, i) => (
      <div
        key={i}
        className="basis-[48%] animate-pulse xl:basis-[18%] lg:basis-[23%] sm:basis-[30%] rounded-lg"
      >
        <div className="rounded-full mb-4 h-24 w-24 mx-auto bg-skeleton dark:bg-slate-600"></div>
        <p className="bg-skeleton mx-auto dark:bg-slate-600 h-4 w-40 rounded-lg"></p>
      </div>
    ));
};

export default CategorySkeleton;
