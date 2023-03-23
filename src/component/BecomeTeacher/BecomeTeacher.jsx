import React, { useContext } from "react";
import { Images } from "../../Assets/images";
import Section from "../Section/Section";
import SectionSkeleton from "../../Skeleton/SectionSkeleton";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";

const BecomeTeacher = () => {
  const { isLoading } = useContext(CourseContext);
  return (
    <div className="min-h-screen w-full dark:bg-slate-900">
      {isLoading ? (
        <SectionSkeleton
          reverse={true}
          r={true}
          button={true}
          w="w-[400px]"
          h="h-[400px]"
          morelines={true}
          p="py-14"
        />
      ) : (
        <Section
          image={Images.BecomeTeacher}
          button={true}
          fTitle={"Become"}
          sTitle={"an instructor"}
          p="py-14"
          w="500px"
        />
      )}
    </div>
  );
};

export default BecomeTeacher;
