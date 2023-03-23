import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthenticationContext = createContext();
const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(false);
  const logOut = () => {
    setUser(null);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  };
  return (
    <AuthenticationContext.Provider value={{ user, setUser, logOut, alert }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
