import { useContext } from "react";
import ButtonBuy from "../ButtonBuy/ButtonBuy";
import { FaPlay } from "react-icons/fa";
import { SingleContext } from "../../container/Course/Course";

const LargeMediaCoursePreview = () => {
  const { handlePlay, handlePreview, singleCourse } = useContext(SingleContext);
  return (
    <div className="shadow dark:shadow-slate-400 hidden lg:block z-10 backdrop-blur-2xl fixed top-24 right-20 w-[25%]">
      <div
        className={`flex items-center relative cursor-pointer justify-center p-12 mb-2 e-full bg-orange-500`}
        onClick={() => {
          handlePreview();
          handlePlay();
        }}
      >
        <div
          className="absolute w-full h-full top-0 left-0 bg-gradient-to-t
                              from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.1)] flex items-center justify-center flex-col"
        >
          <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
            <FaPlay />
          </div>
          <h2 className="text-white text-xl absolute bottom-5">
            Preview this course
          </h2>
        </div>
        <img
          src={singleCourse.image}
          className="w-[150px] h-full object-cover"
          alt={singleCourse.title}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <h1 className="text-3xl dark:text-white">${singleCourse.price}</h1>
          <h1
            className="text-lg ml-3 line-through text-gray-500
                    dark:text-gray-300"
          >
            ${singleCourse.cost}
          </h1>
        </div>
        <ButtonBuy price={singleCourse.price} id={singleCourse.id} />
        <p className="capitalize text-center pt-5 dark:text-white">
          full life time acces
        </p>
      </div>
    </div>
  );
};

export default LargeMediaCoursePreview;
