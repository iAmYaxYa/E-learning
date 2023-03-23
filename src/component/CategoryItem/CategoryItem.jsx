import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div
      className="basis-[48%] xl:basis-[18%] lg:m-[1%]
                 lg:basis-[23%] sm:basis-[30%] rounded-lg shadow-md dark:shadow-slate-300
                  lg:dark:shadow-slate-500 p-4 lg:hover:shadow-xl duration-300"
    >
      <Link to={`/courses/${category.categoryTitle}`}>
        <div
          className={`flex items-center justify-center rounded-full p-3 mb-2 h-24
                       w-24 mx-auto bg-sky-200`}
        >
          <img
            src={category.icon}
            className="w-full h-full object-cover 
                          font-bold"
            alt={category.categoryName}
          />
        </div>
        <p
          className="text-center capitalize font-medium text-sm sm:text-[16px] 
                      dark:text-gray-400"
        >
          {category.categoryName}
        </p>
      </Link>
    </div>
  );
};

export default CategoryItem;
