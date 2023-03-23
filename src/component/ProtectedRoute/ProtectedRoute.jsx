import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
