import React from "react";

const Video = ({ videoRef, source }) => {
  return (
    <video controls autoPlay width="100%" height="100%" ref={videoRef}></video>
  );
};

export default Video;
