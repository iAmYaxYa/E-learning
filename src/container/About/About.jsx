import React from "react";
import { Images } from "../../Assets/images";
import { AboutInfo, Section } from "../../component";
import InfoSkeleton from "../../Skeleton/InfoSkeleton";
import SectionSkeleton from "../../Skeleton/SectionSkeleton";
import useFetch from "../../useFetch";

const url =
  "https://raw.githubusercontent.com/iAmYaxYa/api/main/config/info.json";
const About = () => {
  const { isLoading, Data } = useFetch(url);
  return (
    <div className="dark:bg-slate-900 pb-20">
      {isLoading ? (
        <SectionSkeleton
          reverse={true}
          w="w-[500px]"
          h="h-[400px]"
          p="pt-24"
          morelines={true}
        />
      ) : (
        <Section
          image={Images.About}
          fTitle={"Who"}
          sTitle={"Whe Are?"}
          p="pt-24"
          w="450px"
        />
      )}
      <div className="mt-10 px-4 sm:px-10 gap-5 flex flex-wrap justify-between">
        {isLoading ? (
          <>
            <InfoSkeleton />
            <InfoSkeleton />
            <InfoSkeleton />
          </>
        ) : (
          Data.map((inf) => <AboutInfo inf={inf} key={inf.id} />)
        )}
      </div>
    </div>
  );
};

export default About;
