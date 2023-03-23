import React, { useState } from "react";
import StudentsSayItem from "../StudentsSayItem/StudentsSayItem";
import useFetch from "../../useFetch";
import StudentSkeleton from "../../Skeleton/StudentSkeleton";

const url = "http://localhost:3000/config/students.json";
const StudentSay = () => {
  const { isLoading, Data } = useFetch(url);
  return (
    <div className="w-full min-h-screen dark:bg-slate-900">
      <div className="w-screen py-14 px-4 sm:px-10">
        <h1 className="text-4xl text-center dark:text-white capitalize">
          <span className="text-main dark:text-sky-500 font-medium">what</span>{" "}
          students say?
        </h1>
        <div className="flex items-center flex-wrap gap-5 justify-between my-10">
          {isLoading ? (
            <>
              <StudentSkeleton count={4} />
            </>
          ) : (
            Data.filter((student, index) => index < 4).map((student) => (
              <StudentsSayItem student={student} key={student.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentSay;
