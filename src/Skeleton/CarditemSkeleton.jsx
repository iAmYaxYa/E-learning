import React from "react";

const CarditemSkeleton = ({ status, coursePreview, count }) => {
  return (
    <div
      className="basis-full animate-pulse xl:basis-[23%]
               lg:basis-[30%] sm:basis-[48%]
                pb-4"
    >
      <div
        className={`mb-2 h-[210px] w-full bg-skeleton dark:bg-slate-600`}
      ></div>
      <div className="py-3">
        <h1 className="bg-skeleton dark:bg-slate-600 h-12 w-full"></h1>
        {status && (
          <div className="flex flex-col gap-3">
            <h1 className="bg-skeleton dark:bg-slate-600 mt-3 h-4 w-40 rounded-lg"></h1>
            <div className="flex gap-1">
              <div className="bg-skeleton dark:bg-slate-600 h-4 w-full"></div>
            </div>
          </div>
        )}
        {coursePreview && (
          <>
            <div className="bg-skeleton dark:bg-slate-600 h-4 mt-3 w-56"></div>
            <span className=""></span>
            <div className="flex items-center gap-x-2">
              <p className="bg-skeleton dark:bg-slate-600 h-4 my-3 w-32"></p>
              <p className="bg-skeleton dark:bg-slate-600 h-4 my-3 w-32"></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarditemSkeleton;
