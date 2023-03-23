import React from "react";
import { useLocation } from "react-router-dom";
import { WatchCourse } from "../../component";

const Learn = () => {
  const { state } = useLocation();

  return (
    <>
      <WatchCourse Data={state} />
    </>
  );
};

export default Learn;
