import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from "../Header/Header";
import CategoryList from "../CategoryList/CategoryList";
import PagesList from "../PagesList/PagesList";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";
import { FaSignOutAlt } from "react-icons/fa";

const MobileNavbar = ({ avator }) => {
  const { handleToggle, Toggle } = useContext(ToggleContext);
  const { user, logOut } = useContext(AuthenticationContext);
  return (
    <>
      <div
        className={`block lg:hidden ${
          Toggle
            ? "fixed h-screen w-full top-0 left-0 bottom-0 bg-rgba"
            : "hidden"
        }`}
      >
        <div
          className={`${
            Toggle ? "left-0" : "negative"
          } fixed top-0 h-screen bg-white dark:bg-slate-900 flex flex-col gap-y-1 delay-1000`}
        >
          {/* ====================== Profile ====================== */}
          {user ? (
            <>
              <div className="flex pl-5 pr-20 gap-4 items-center border-b py-4 dark:border-slate-500 bg-neutral-200 dark:bg-slate-800">
                <div className="bg-main dark:bg-sky-500 profile h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <Link
                    onClick={handleToggle && handleToggle}
                    to="/user/edit-profile"
                    className="font-medium uppercase text-md text-white"
                  >
                    {user && avator}
                  </Link>
                </div>
                <div>
                  <h1 className="text-lg font-medium dark:text-white capitalize">
                    hi, {user.username}
                  </h1>
                  <p className="dark:text-slate-300">welcome back!</p>
                </div>
              </div>
              <div className="flex flex-col pl-5 pr-20 gap-y-1 border-b dark:border-slate-500 py-4">
                <span className="text-gray-500 font-bold capitalize">
                  learn
                </span>
                <Link
                  to="/mylearning"
                  onClick={handleToggle}
                  className="duration-300 hover:text-main capitalize dark:text-slate-400 dark:hover:text-sky-500"
                >
                  my learning
                </Link>
              </div>
            </>
          ) : (
            /* ===================== Login & Sign up ========================= */
            <div className="flex flex-col pl-5 pr-20 gap-y-1 border-b dark:border-slate-500 py-4">
              <Link
                to="/log-in"
                className="text-main dark:text-sky-500 text-md "
                onClick={handleToggle}
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="text-main dark:text-sky-500 text-md "
                onClick={handleToggle}
              >
                Sign up
              </Link>
            </div>
          )}
          {/* ======================= Page List ======================== */}
          <PagesList
            handleToggle={handleToggle}
            p={"pl-5 pr-20"}
            title={"pages"}
            b={"border-b"}
          />
          {/* ======================== CAtegory List ======================== */}
          <CategoryList
            handleToggle={handleToggle}
            title={"most popular"}
            p={"pl-5 pr-20"}
          />
          {/* ==================== LogOut ==================== */}
          {user && (
            <div className="pl-5 pr-20 border-t dark:border-slate-500 pt-4">
              <Link
                to="/"
                onClick={() => {
                  handleToggle();
                  logOut();
                }}
                className="flex items-center gap-3"
              >
                <span>
                  <FaSignOutAlt className="dark:text-white" />
                </span>
                <span className="dark:text-white capitalize">log out</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
