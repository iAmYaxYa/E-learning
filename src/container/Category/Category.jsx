import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Back, CourseItem } from "../../component";
import CardSkeleton from "../../Skeleton/CardSkeleton";
import useFetch from "../../useFetch";

const url =
  "https://raw.githubusercontent.com/iAmYaxYa/api/main/config/courses.json";
const Category = () => {
  const [query, setQuery] = useState("");
  const { isLoading, Data } = useFetch(url);
  const { categoryid } = useParams();
  const courses = Data.filter((courses) => courses.categoryid == categoryid);
  const filterCourses = courses.filter(
    (course) =>
      course.root.toLowerCase().includes(query.toLowerCase()) ||
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.name.toLowerCase().includes(query.toLowerCase())
  );
  const change = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28">
      <Back url={`/courses`} input={true} change={change} />
      <div className="flex gap-5 flex-wrap px-4 sm:px-10">
        {isLoading ? (
          <CardSkeleton coursePreview={true} count={8} />
        ) : filterCourses.length === 0 ? (
          <h1 className="text-3xl dark:text-white font-medium my-10">
            Sorry we couldn't find any results for "
            <span className="text-main dark:text-sky">{query}</span>"
          </h1>
        ) : (
          filterCourses &&
          filterCourses.map((course) => (
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

export default Category;
