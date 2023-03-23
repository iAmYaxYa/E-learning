import React from "react";
import Skeleton from "./Skeleton";

const ProceedBtnSkeleton = () => {
  return (
    <div className="fixed md:static bottom-0 left-0 flex flex-col gap-3 w-full mt-0 md:mt-6 md:p-0 px-4 py-2 backdrop-blur-2xl">
      <div className="w-full md:w-[70%] pt-3 flex items-center md:hidden justify-between">
        <Skeleton h="4" w="14" r="lg" />
        <Skeleton h="4" w="14" r="lg" />
      </div>
      <Skeleton h="8" w="w-full md:w-[70%]" r="lg" />

      <dir className="flex justify-center items-center mt-3">
        <Skeleton h="4" w="52" r="lg" />
      </dir>
    </div>
  );
};

export default ProceedBtnSkeleton;
