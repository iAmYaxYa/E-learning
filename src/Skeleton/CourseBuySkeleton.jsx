import React from "react";
import Skeleton from "./Skeleton";

const CourseBuySkeleton = () => {
  return (
    <div
      className="flex lg:hidden animate-pulse fixed bottom-0 left-0 w-full z-10
    items-center justify-between px-4 sm:px-10 pb-2 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* <div className="flex flex-col gap-2"> */}
        <Skeleton h="6" r="xl" w="16" />
        <Skeleton h="4" r="lg" w="16" />
        {/* </div> */}
      </div>
      <div className="w-72">
        <Skeleton h="12" r="xl" w="full" />
      </div>
    </div>
  );
};

export default CourseBuySkeleton;
