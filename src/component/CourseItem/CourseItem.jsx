import React from "react";
import { Link } from "react-router-dom";
import "./course-item.scss";

const CourseItem = ({ course, url, coursePreview, state, status }) => {
  return (
    <div
      className="basis-full xl:basis-[23%]
                 lg:basis-[30%] sm:basis-[48%]
                  pb-4"
    >
      <Link to={`/course/${url}`} state={state}>
        <div
          className={`flex zoom-in items-center justify-center p-12 mb-2 h-60 w-full mx-auto bg-orange-300`}
        >
          <img
            src={course.image}
            className="w-[150px] scale-100 duration-1000 h-full object-cover"
            alt={course.title}
          />
        </div>
        <div className="py-3">
          <h1 className="capitalize dark:text-white text-2xl text-black font-normal">
            {course.name}
          </h1>
          {status && (
            <div>
              <h1 className="capitalize text-lg text-slate-600 dark:text-slate-300 font-normal">
                {course.teacher}
              </h1>
              <div className="w-full bg-slate-300 h-1 rounded-xl">
                <div className="w-6 bg-main dark:bg-sky-500 h-full"></div>
              </div>
              <div className="flex gap-1">
                <span className="dark:text-slate-300">6%</span>
                <span className="dark:text-slate-300">complete</span>
              </div>
            </div>
          )}
          {coursePreview && (
            <>
              <span className="dark:text-white capitalize font-light">
                {course.teacher}
              </span>
              <span className="dark:text-white font-light ml-2">
                {course.learning.toLocaleString()}
              </span>
              <div className="flex items-center gap-x-2">
                <p className="font-medium text-xl text-black dark:text-white">
                  ${course.price}
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-400 line-through">
                  ${course.cost}
                </p>
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CourseItem;
