import React from "react";
import Skeleton from "./Skeleton";

const CourseContentSkeleton = () => {
  return (
    <div className="px-4 animate-pulse sm:px-10 mt-10 w-full lg:w-[50%]">
      <Skeleton w="full lg:w-[50%]" r="2xl" h="8" />
      <br />
      <Skeleton w="full lg:w-[80%]" r="lg" h="4" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
      <Skeleton w="full" h="14" />
      <br />
    </div>
  );
};

export default CourseContentSkeleton;
