import React from "react";
import Skeleton from "./Skeleton";

const OrderDetailSkeleton = () => {
  return (
    <div className="flex mt-10 flex-col gap-5">
      <Skeleton w="40" r="2xl" h="10" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton w="12" h="12" />
          <Skeleton w="60" r="2xl" h="10" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton w="10" r="lg" h="4" />
          <Skeleton w="10" r="lg" h="4" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailSkeleton;
