import React, { createContext } from "react";
import useFetch from "../../useFetch";

const url =
  "https://raw.githubusercontent.com/iAmYaxYa/api/main/config/courses.json";
const CourseContext = createContext();
const CourseContextProvider = (props) => {
  const { isLoading, Data } = useFetch(url);
  return (
    <CourseContext.Provider value={{ isLoading, Data }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export { CourseContextProvider, CourseContext };
