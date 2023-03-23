import React, { createContext } from "react";
import useFetch from "../../useFetch";

const url = "http://localhost:3000/config/categories.json";
const CategoryContex = createContext();
const CategoriesContextProvider = (props) => {
  const { isLoading, Data } = useFetch(url);
  return (
    <CategoryContex.Provider value={{ isLoading, Data }}>
      {props.children}
    </CategoryContex.Provider>
  );
};

export { CategoriesContextProvider, CategoryContex };
