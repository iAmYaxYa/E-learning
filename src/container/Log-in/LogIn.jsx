import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Assets/images";
import { Form } from "../../component";
import { CourseContext } from "../../Context/CourseContextProvider/CourseContextProvider";

import SignupLoginSkeleton from "../../Skeleton/SignupLoginSkeleton";

const LogIn = () => {
  const { isLoading } = useContext(CourseContext);

  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28">
      <div className="w-screen">
        {isLoading ? (
          <SignupLoginSkeleton />
        ) : (
          <div className="flex justify-between flex-col-reverse md:flex-row items-center flex-wrap gap-5  px-4 sm:px-10">
            <div className="w-full md:w-[48%]">
              <img src={Images.logIn} alt="" className="w-[500px]" />
            </div>

            <div className="w-full md:w-[48%] flex flex-col gap-3 p-3">
              <h1 className="text-4xl dark:text-white">Welcome!</h1>
              <h1 className="text-lg text-slate-500 dark:text-slate-300">
                Sign in to continue
              </h1>
              <Form type="log in" />
              <div className="flex items-center gap-2">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Dont have an account?
                </p>
                <Link to="/sign-up" className="text-main dark:text-sky-500">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogIn;
