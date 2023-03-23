import React from "react";
import { useContext } from "react";
import { SingleContext } from "../../container/Course/Course";

const CourseInfo = () => {
  const { singleCourse } = useContext(SingleContext);
  return (
    <div className="px-4 sm:px-10">
      <div className="my-4 space-y-2">
        <h1
          className="dark:text-white text-2xl sm:text-4xl text-black capitalize w-full
               lg:w-[50%]  font-base"
        >
          {singleCourse.name}
        </h1>
        <p
          className="dark:text-white w-full lg:w-[50%] text-black text-sm sm:text-lg
               font-base"
        >
          {singleCourse.desc}
        </p>
        <p
          className="dark:text-white font-light text-black text-sm 
              sm:text-lg"
        >
          {singleCourse.learning.toLocaleString()} <span>students</span>
        </p>
        <p
          className="dark:text-white font-light
               text-sm sm:text-lg"
        >
          Created by
          <span
            className="text-blue-600 font-light 
               cursor-pointer ml-1 underline dark:text-sky-300"
          >
            {singleCourse.teacher}
          </span>
        </p>
        <div className="block lg:hidden">
          <div className="flex items-center">
            <h1 className="text-3xl dark:text-white">${singleCourse.price}</h1>
            <h1
              className="text-lg ml-3 line-through text-gray-500
                    dark:text-gray-300"
            >
              ${singleCourse.cost}
            </h1>
          </div>
          <p className="capitalize pt-2 dark:text-white">
            full life time acces
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
