import { React, useContext } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { CategoryContex } from "../../Context/CategoriesContextProvider/CategoriesContextProvider";
import CategorySkeleton from "../../Skeleton/CategorySkeleton";

const Categories = () => {
  const { isLoading, Data } = useContext(CategoryContex);
  return (
    <div className="w-screen p-4 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-medium mb-8 ml-0 md:ml-5 dark:text-white">
        Top Categories
      </h1>
      <div className="flex items-center flex-wrap gap-3 sm:gap-0">
        {isLoading ? (
          <>
            <CategorySkeleton count={7} />
          </>
        ) : (
          Data.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
