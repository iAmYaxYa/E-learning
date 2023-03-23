import React from "react";
import Skeleton from "./Skeleton";

const SummarySkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <Skeleton w="44" r="2xl" h="10" />
      <div className="flex flex-col gap-2">
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <Skeleton w="20" r="xl" h="6" />
          <Skeleton w="10" r="lg" h="4" />
        </div>
        <div className="w-full md:w-[70%] flex items-center justify-between">
          <Skeleton w="20" r="xl" h="6" />
          <Skeleton w="10" r="lg" h="4" />
        </div>
      </div>
      <div className="w-full md:w-[70%] border-t pt-3 flex items-center justify-between">
        <Skeleton w="20" r="xl" h="6" />
        <Skeleton w="10" r="lg" h="4" />
      </div>
    </div>
  );
};

export default SummarySkeleton;
