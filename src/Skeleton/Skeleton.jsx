import React from "react";

const Skeleton = ({ w, h, r, m }) => {
  return (
    <div
      className={`w-${w} h-${h} animate-pulse rounded-${r} ${m} bg-skeleton dark:bg-slate-600`}
    ></div>
  );
};

export default Skeleton;
