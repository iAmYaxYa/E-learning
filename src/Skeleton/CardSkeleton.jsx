import React from "react";
import CarditemSkeleton from "./CarditemSkeleton";

const CardSkeleton = ({ status, coursePreview, count }) => {
  return Array(count)
    .fill(0)
    .map((card, i) => (
      <CarditemSkeleton key={i} coursePreview={coursePreview} status={status} />
    ));
};

export default CardSkeleton;
