import React from "react";
import Skeleton from "./Skeleton";

const SectionSkeleton = ({
  m,
  reverse,
  r,
  button,
  h,
  w,
  morelines,
  h2,
  desc,
  p,
  mt,
}) => {
  return (
    <div
      className={`w-screen animate-pulse ${p} flex-wrap px-4 sm:px-10 flex ${
        reverse && "lg:flex-row-reverse flex-col-reverse"
      } justify-between items-center`}
    >
      <div className="w-full lg:w-[48%]  flex items-center justify-center flex-col">
        <h1 className="h-14 w-full my-3 bg-skeleton dark:bg-slate-600"></h1>
        {h2 && (
          <h1 className={`h-14 w-full ${m} bg-skeleton dark:bg-slate-600`}></h1>
        )}
        {desc && (
          <>
            <h1
              className={`h-14 w-full my-2 bg-skeleton dark:bg-slate-600`}
            ></h1>
            <h1
              className={`h-14 w-full my-2 bg-skeleton dark:bg-slate-600`}
            ></h1>
            <h1
              className={`h-14 w-full  my-2 bg-skeleton dark:bg-slate-600`}
            ></h1>
            <h1
              className={`h-14 w-full my-2 bg-skeleton dark:bg-slate-600`}
            ></h1>
          </>
        )}
        {desc ? (
          ""
        ) : (
          <>
            {" "}
            <p className="h-4 my-3 w-full bg-skeleton dark:bg-slate-600"></p>
            <p className="h-4 w-full bg-skeleton dark:bg-slate-600"></p>
          </>
        )}
        {morelines && (
          <>
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="56" h="4" m="my-2" />
            <br />
            <br />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
            <Skeleton w="full" h="4" m="my-2" />
          </>
        )}
        {button && (
          <button className="h-12 rounded-xl w-44 my-4 bg-skeleton dark:bg-slate-600"></button>
        )}
      </div>
      <div
        className={`w-full  lg:w-[50%] overflow-hidden px-4 ${
          mt && "mt-10"
        } my-0  flex flex-col items-center justify-center`}
      >
        <div
          className={`${h} ${w} ${
            r && "rounded-full"
          } bg-skeleton dark:bg-slate-600`}
        ></div>
        {desc && (
          <>
            <h1 className="h-14 w-full my-3 bg-skeleton dark:bg-slate-600"></h1>
            <h1 className="h-14 w-full rounded-lg my-3 bg-skeleton dark:bg-slate-600"></h1>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionSkeleton;
