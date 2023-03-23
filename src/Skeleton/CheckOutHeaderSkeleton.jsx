import React from "react";

const CheckOutHeaderSkeleton = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center animate-pulse w-full bg-white dark:bg-slate-900 justify-between px-4 sm:px-10 py-3 shadow-md dark:shadow-slate-600">
      <h1 className="h-10 rounded-3xl w-44 bg-skeleton"></h1>
      <h1 className="h-10 w-10 bg-skeleton"></h1>
    </div>
  );
};

export default CheckOutHeaderSkeleton;
