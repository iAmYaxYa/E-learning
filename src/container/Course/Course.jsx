import { useRef, createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheck, FaCircle, FaHashtag } from "react-icons/fa";
import {
  Back,
  CourseBuySmallMedia,
  CourseContent,
  CourseInfo,
  LargeMediaCoursePreview,
  List,
  PreviewCourse,
  SmallMediaCoursePreview,
} from "../../component";
import ListSkeleton from "../../Skeleton/ListSkeleton";
import LargeMediaSkeleton from "../../Skeleton/LargeMediaSkeleton";
import CourseInfoSkeleton from "../../Skeleton/CourseInfoSkeleton";
import SmallMediSkeleton from "../../Skeleton/SmallMediSkeleton";
import CourseContentSkeleton from "../../Skeleton/CourseContentSkeleton";
import CourseBuySkeleton from "../../Skeleton/CourseBuySkeleton";
import useFetch from "../../useFetch";

const url =
  "https://raw.githubusercontent.com/iAmYaxYa/api/main/config/courses.json";

export const SingleContext = createContext();
const Course = () => {
  const { isLoading, Data } = useFetch(url);
  const { id } = useParams();
  const singleCourse = Data.find((course) => course.title === id);
  const [preview, setPreview] = useState(false);
  const [selected, setSelected] = useState(0);

  const Accourdin = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const handlePreview = () => {
    setPreview(!preview);
  };

  const videoRef = useRef();

  const handlePause = () => videoRef.current.pause();
  const handlePlay = () => videoRef.current.play();

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 pt-28">
      <SingleContext.Provider
        value={{
          isLoading,
          singleCourse,
          selected,
          videoRef,
          handlePause,
          handlePlay,
          handlePreview,
          Accourdin,
          preview,
        }}
      >
        {/* ======================== Back ======================== */}
        <Back url={`/courses`} />
        {/* ======================== Small media course preview ======================== */}
        {isLoading ? <SmallMediSkeleton /> : <SmallMediaCoursePreview />}
        {/* ======================== Preview Video ======================== */}
        {isLoading ? "" : <PreviewCourse />}
        {/* ======================== Course buy in small media ======================== */}
        {isLoading ? <CourseBuySkeleton /> : <CourseBuySmallMedia />}
        {/* ======================== Course description ======================== */}
        {isLoading ? <CourseInfoSkeleton /> : <CourseInfo />}
        {/* ======================== Large media course preview ======================== */}
        {isLoading ? <LargeMediaSkeleton /> : <LargeMediaCoursePreview />}
        {/* ======================== What you will learn ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="what you'll learn"
            type={singleCourse.whatYouLearn}
            border={"border"}
            padding={"p-5"}
            flex={"flex"}
            icon={<FaCheck />}
          />
        )}
        {/* ======================== This course include ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="This course include"
            type={singleCourse.thisCourseInclude}
            flex={"flex"}
            icon={<FaHashtag />}
          />
        )}
        {/* ======================== Course content  ======================== */}
        {isLoading ? <CourseContentSkeleton /> : <CourseContent />}
        {/* ======================== Requirments  ======================== */}
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <List
            title="Requirements"
            type={singleCourse.requirements}
            size={true}
            borderT={"border-t"}
            borderB={"border-b"}
            padding={"py-2"}
            icon={<FaCircle />}
          />
        )}
      </SingleContext.Provider>
    </div>
  );
};

export default Course;
