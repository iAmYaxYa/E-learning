import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { SingleContext } from "../../container/Course/Course";

const SmallMediaCoursePreview = () => {
  const { handlePlay, handlePreview, singleCourse } = useContext(SingleContext);

  return (
    <div
      className={`flex items-center cursor-pointer lg:hidden justify-center
          relative p-12 mb-2 h-[25%] w-full mx-auto bg-orange-500`}
      onClick={() => {
        handlePreview();
        handlePlay();
      }}
    >
      <div
        className="absolute w-full h-full top-0 left-0 bg-gradient-to-t
                           from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)] flex items-center
                            justify-center flex-col"
      >
        <div
          className="bg-white rounded-full h-16 w-16
                            flex items-center justify-center"
        >
          <FaPlay />
        </div>
        <h2 className="text-white text-xl absolute bottom-5">
          Preview this course
        </h2>
      </div>
      <img
        src={singleCourse.image}
        className="w-[150px] h-full
                          object-cover"
        alt={singleCourse.name}
      />
    </div>
  );
};

export default SmallMediaCoursePreview;
