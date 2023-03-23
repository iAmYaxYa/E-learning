import React from "react";
import Skeleton from "./Skeleton";

const SignupLoginSkeleton = ({ threeinput }) => {
  return (
    <div className="flex justify-between  animate-pulse flex-col-reverse md:flex-row items-center flex-wrap gap-5  px-4 sm:px-10">
      <div className="w-full md:w-[48%] h-[400px] bg-skeleton dark:bg-slate-600"></div>
      <div className="w-full md:w-[48%] flex flex-col gap-3 p-3">
        <Skeleton h="12" w="52" r="2xl" />
        <Skeleton h="4" w="52" r="lg" />
        <Skeleton h="10" w="full" />
        <Skeleton h="10" w="full" />
        {threeinput && <Skeleton h="10" w="full" />}
        <Skeleton h="10" w="full" />
      </div>
    </div>
  );
};

export default SignupLoginSkeleton;
