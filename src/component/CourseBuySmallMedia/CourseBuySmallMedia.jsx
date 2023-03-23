import ButtonBuy from "../ButtonBuy/ButtonBuy";
import { SingleContext } from "../../container/Course/Course";
import { useContext } from "react";

const CourseBuySmallMedia = () => {
  const { singleCourse } = useContext(SingleContext);
  return (
    <div
      className="flex lg:hidden fixed bottom-0 left-0 w-full z-[5]
       items-center justify-between px-4 sm:px-10 pb-2 backdrop-blur-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
        <h1 className="text-xl dark:text-white">
          ${singleCourse.price > 0 ? singleCourse.price : "Free"}
        </h1>
        <h1
          className="ml-0 sm:ml-3 line-through text-gray-500
                dark:text-gray-300"
        >
          ${singleCourse.cost}
        </h1>
      </div>
      <ButtonBuy price={singleCourse.price} large={true} id={singleCourse.id} />
    </div>
  );
};

export default CourseBuySmallMedia;
