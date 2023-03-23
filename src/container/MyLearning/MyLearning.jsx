import React from "react";
import { useContext } from "react";
import { CourseItem } from "../../component";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";
import CardSkeleton from "../../Skeleton/CardSkeleton";

const MyLearning = () => {
  const { isLoading, Data } = useContext(CourseContext);
  const courses = Data.filter((course) => course.id === 22);
  return (
    <div className="dark:bg-slate-900 h-full w-full py-20">
      <div className="bg-neutral-100 h-32 w-screen dark:bg-slate-800 px-4 sm:px-10 flex items-center">
        <h1 className=" dark:text-white capitalize text-5xl">my learning</h1>
      </div>
      <div className="px-4 sm:px-10">
        <h2 className="text-slate-900 w-28 font-medium py-2 dark:border-slate-400 border-b-4 border-slate-900 dark:text-slate-200 text-xl my-4 capitalize">
          all courses
        </h2>
        <div className="flex gap-5 flex-wrap">
          {isLoading ? (
            <CardSkeleton status={true} />
          ) : (
            courses.map((course) => (
              <CourseItem
                course={course}
                key={course.id}
                url={`${course.title}/learn`}
                state={course}
                status={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
