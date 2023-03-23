import React, { useContext } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";
import CardSkeleton from "../../Skeleton/CardSkeleton";
import Skeleton from "../../Skeleton/Skeleton";

const PopularCourses = () => {
  const { isLoading, Data } = useContext(CourseContext);
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-5 px-4 sm:px-10">
      {isLoading ? (
        <div className="flex items-center justify-center mb-6">
          <Skeleton w="80" h="10" />
        </div>
      ) : (
        <h1
          className="text-4xl font-medium mb-8 ml-0 md:ml-5 dark:text-white 
     capitalize text-center"
        >
          <span className="text-main dark:text-sky-500">our</span> popular
          courses
        </h1>
      )}
      <div className="flex gap-5 flex-wrap justify-between">
        {isLoading ? (
          <CardSkeleton coursePreview={true} count={8} />
        ) : (
          Data.filter((course, index) => index < 8).map((course) => (
            <CourseItem
              key={course.id}
              course={course}
              coursePreview={true}
              url={course.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
