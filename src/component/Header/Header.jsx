import React, { useContext, useState } from "react";
import { createContext } from "react";

import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";

export const ToggleContext = createContext();
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const avator = user ? user.username.slice(0, 1) : null;
  const handleToggle = () => {
    setToggle(!Toggle);
  };
  return (
    <ToggleContext.Provider value={{ handleToggle, Toggle }}>
      <div
        className="min-w-screen fixed top-0 left-0 right-0 
      backdrop-blur-xl z-10 shadow-md dark:shadow-slate-400 sm:shadow-none"
      >
        <div
          className="py-4 px-4 sm:px-10 flex 
        items-center w-full justify-between"
        >
          <DesktopNavbar avator={avator} />
          <MobileNavbar avator={avator} />
        </div>
      </div>
    </ToggleContext.Provider>
  );
};

export default Navbar;
