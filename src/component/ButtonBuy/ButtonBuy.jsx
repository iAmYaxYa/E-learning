import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";
const ButtonBuy = ({ large, price, id }) => {
  const { user } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const handleButton = () => {
    if (!user) {
      return navigate("/sign-up");
    }
    if (user) {
      return navigate(`/check-out/${id}`);
    }
  };
  return (
    <button
      onClick={handleButton}
      className={`bg-main text-center ${
        large && "ml-4"
      } sm: text-xl w-full py-3 
          mt-4 text-white rounded dark:bg-sky-500 capitalize`}
    >
      {price > 0 ? "buy now" : "enroll now"}
    </button>
  );
};

export default ButtonBuy;
