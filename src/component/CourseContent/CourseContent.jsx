import { useContext } from "react";
import { FaAngleDown, FaVideo } from "react-icons/fa";
import { SingleContext } from "../../container/Course/Course";

const CourseContent = () => {
  const { Accourdin, selected, singleCourse } = useContext(SingleContext);
  return (
    <div className="px-4 sm:px-10 mt-10 w-full lg:w-[50%]">
      <h1 className="dark:text-white text-2xl capitalize">course content</h1>
      <div className="flex gap-3 my-4">
        <span className="dark:text-slate-300">
          {singleCourse.totalSections} , {singleCourse.totalLectures} & {""}
          {singleCourse.totalDuration} total length
        </span>
      </div>
      <div className="border border-gray-200 dark:border-slate-200">
        {singleCourse.courseContent.map((course, i) => (
          <div key={course.id}>
            <div
              className="p-3 flex gap-3 border cursor-pointer items-center border-gray-400 dark:border-slate-400 bg-neutral-100 dark:bg-slate-800"
              onClick={() => Accourdin(i)}
            >
              <span>
                <FaAngleDown
                  className={
                    selected === i
                      ? "rotate-180 duration-300 dark:text-white"
                      : "duration-300 dark:text-white"
                  }
                />
              </span>
              <h1 className="text-lg capitalize dark:text-white font-medium">
                {course.header}
              </h1>
            </div>
            <ul
              className={
                selected === i
                  ? "h-auto max-h-full py-4 flex flex-col gap-2"
                  : "max-h-0 overflow-hidden"
              }
            >
              {course.content.map((conte) => (
                <li
                  key={conte.id}
                  className="flex gap-3 px-3 items-center w-full"
                >
                  <span>
                    <FaVideo className="dark:text-white" />
                  </span>
                  <span className="capitalize font-base dark:text-slate-300">
                    {conte.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
