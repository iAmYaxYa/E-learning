import React, { useRef, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { SingleContext } from "../../container/Course/Course";

const PreviewCourse = () => {
  const {
    handlePause,
    handlePreview,
    isLoading,
    singleCourse,
    preview,
    videoRef,
  } = useContext(SingleContext);
  return (
    <div
      className={`${
        preview
          ? "fixed z-50 left-0 top-0 w-full h-screen bg-rgba flex items-center justify-center"
          : "hidden"
      }`}
    >
      <div className="bg-black px-4 sm:px-10 py-5 rounded w-full h-full lg:h-fit lg:w-[35%]">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-gray-300 font-medium text-lg capitalize">
            course preview
          </h1>
          <div onClick={handlePause}>
            <FaTimes
              className="text-white text-xl cursor-pointer"
              onClick={handlePreview}
            />
          </div>
        </div>
        <h1 className="text-white text-2xl capitalize">{singleCourse.name}</h1>
        {/* video */}
        <div className="mb-4 h-72 my-3 w-full">
          {isLoading ? (
            "loading..."
          ) : (
            <video
              controls
              ref={videoRef}
              className="border border-slate-300 rounded"
              width="100%"
              height="100%"
            >
              <source src={singleCourse.preview} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewCourse;
