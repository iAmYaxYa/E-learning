import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaEdit, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { TbSun } from "react-icons/tb";
import { ThemeContext } from "../../Context/ThemeContextProvider/ThemeContextProvider";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";
import { ToggleContext } from "../Header/Header";
import "./desktopNavbar.scss";

const DesktopNavbar = ({ avator }) => {
  const { Toggle, handleToggle } = useContext(ToggleContext);
  const { Dark, darkMode } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthenticationContext);
  return (
    <>
      {/* =============================== Logo =============================== */}
      <div className="flex items-center">
        <Link
          className="text-main dark:text-white capitalize
                 font-bold text-4xl"
          to="/"
        >
          Som
          <span
            className="text-slate-900
                  dark:text-sky-500"
          >
            Tac.
          </span>
        </Link>
      </div>

      {/* =============================== Menus =============================== */}

      <ul className="hidden lg:flex space-x-8 items-center">
        <li>
          <NavLink
            to="/"
            className="hover:text-main dark:hover:text-sky-500
                     duration-300 font-medium uppercase text-md text-black dark:text-white"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className="hover:text-main dark:hover:text-sky-500
                     duration-300 font-medium uppercase text-md text-black dark:text-white"
          >
            courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="hover:text-main dark:hover:text-sky-500 
                    duration-300 font-medium uppercase text-md text-black dark:text-white"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="hover:text-main dark:hover:text-sky-500
                     duration-300 font-medium uppercase text-md text-black dark:text-white"
          >
            contact
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                to="/mylearning"
                className="hover:text-main dark:hover:text-sky-500
                     duration-300 font-medium uppercase text-md text-black dark:text-white"
              >
                my learning
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* =============================== Icons =============================== */}

      <div className="flex items-center">
        <div className="flex items-center gap-4">
          {/* ========================= Profile ======================== */}
          <div className="hidden lg:flex items-center gap-2">
            {user ? (
              <>
                <li className="bg-main dark:bg-sky-500 profile h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                  <Link
                    to="/user/edit-profile"
                    className="font-medium uppercase text-md text-white"
                  >
                    {user && avator}
                  </Link>
                </li>
                <ul className="hidden info absolute bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-600 h-auto w-52 top-16 right-20 rounded">
                  <span className="absolute h-6 cursor-pointer w-6 bg-trasnparent right-5 top-[-8px]"></span>
                  <div className="flex px-3 gap-4 items-center py-4 ">
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
                      <p className="dark:text-slate-300">{user.email}</p>
                    </div>
                  </div>
                  <li className="px-3 py-3 hover:bg-neutral-100 dark:hover:bg-slate-800 duration-300 cursor-pointer">
                    <Link
                      className="flex items-center gap-3"
                      to="/user/edit-profile"
                    >
                      <span>
                        <FaEdit className="dark:text-white" />
                      </span>
                      <span className="dark:text-white capitalize">
                        profile edit
                      </span>
                    </Link>
                  </li>
                  <li className="px-3 py-3 hover:bg-neutral-100 dark:hover:bg-slate-800 duration-300 cursor-pointer">
                    <Link
                      className="flex items-center gap-3"
                      onClick={logOut}
                      to="/"
                    >
                      <span>
                        <FaSignOutAlt className="dark:text-white" />
                      </span>
                      <span className="dark:text-white capitalize">
                        log out
                      </span>
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <Link
                  to="/log-in"
                  className="text-md font-medium text-main border py-2 
                        px-4 border-main dark:border-sky-500 dark:text-sky-500 rounded-lg 
                        hover:bg-gray-100 dark:hover:bg-slate-800 duration-300"
                >
                  Log in
                </Link>
                <Link
                  to="/sign-up"
                  className="text-md font-medium text-white border py-2  px-4
                         border-main rounded-lg bg-main dark:bg-sky-500"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
          {/* ===================== Dark Mode Icos ========================= */}
          <div
            className="border border-gray-300 dark:border-slate-600 p-2 rounded-lg
                     shadow cursor-pointer"
          >
            <div
              className="text-xl text-main dark:text-sky-500"
              onClick={darkMode}
            >
              {Dark === "dark" ? <TbSun /> : <BsMoonStars />}
            </div>
          </div>
          {/* ======================= Toggle Menu Icon ========================== */}
          <div
            className={`${
              Toggle && "sm:hidden"
                ? "rounded-full shadow shadow-slate-900 dark:shadow-slate-500 p-2"
                : ""
            } border bg-white dark:bg-slate-900 border-gray-300 z-20 dark:border-slate-600 p-2 rounded-lg shadow lg:hidden cursor-pointer`}
            onClick={handleToggle}
          >
            {Toggle ? (
              <FaTimes className="text-xl text-main dark:text-sky-500" />
            ) : (
              <FaBars
                className="text-xl text-main 
                             dark:text-sky-500"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
