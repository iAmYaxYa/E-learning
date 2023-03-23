import React, { useContext } from "react";
import ContactSection from "../../component/ContactSection/ContactSection";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";
import SectionSkeleton from "../../Skeleton/SectionSkeleton";

const Contact = () => {
  const { isLoading } = useContext(CourseContext);
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28">
      {isLoading ? (
        <SectionSkeleton
          reverse={true}
          w="w-[500px]"
          h="h-[300px]"
          button={true}
          desc={true}
        />
      ) : (
        <ContactSection />
      )}
    </div>
  );
};

export default Contact;
