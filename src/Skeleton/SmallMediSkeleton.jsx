import React from "react";

const SmallMediSkeleton = () => {
  return (
    <div
      className={`flex items-center animate-pulse cursor-pointer lg:hidden justify-center
        relative p-12 mb-2 h-[250px] w-full bg-skeleton dark:bg-slate-600`}
    ></div>
  );
};

export default SmallMediSkeleton;
