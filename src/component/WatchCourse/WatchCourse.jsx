import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Accordin } from "..";
import Video from "../Video/Video";
const WatchCourse = ({ Data }) => {
  const courseContent = Data.courseContent;
  const src = courseContent[0].content[0].src;

  const [source, setSource] = useState(courseContent[0].content[0].src);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.src = source;
  }, [source]);
  return (
    <div className="h-screen fixed top-0 left-0 z-20 bg-white  w-full dark:bg-slate-900">
      <div className="py-0 sm:py-10 flex justify-between w-full gap-10 flex-wrap">
        <div className="basis-full flex flex-col gap-5 lg:basis-[45%]">
          <h1 className="text-xl p-4 lg:px-10 flex items-center gap-3 dark:text-white py-2 border-b border-slate-400 dark:border-slate-500">
            <Link to="/mylearning">
              <FaArrowLeft />
            </Link>
            <span className="capitalize">{Data.name}</span>
          </h1>
          <div className="h-40 px-0 lg:px-10">
            <Video videoRef={videoRef} />
          </div>
        </div>
        <div className="basis-full flex p-4 lg:px-10 flex-col gap-3 lg:basis-[45%]">
          <h1
            className="text-xl text-slate-600 
        dark:text-slate-300"
          >
            Course Content
          </h1>
          <ul className="overflow-y-auto max-h-[500px]">
            {courseContent.map((course) => (
              <Accordin
                key={course.id}
                header={course.header}
                content={course.content}
                setSource={setSource}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
