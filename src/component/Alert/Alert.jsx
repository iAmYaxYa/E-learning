import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Alert = ({ close, setAlert, fix, abs, text }) => {
  return (
    <div
      className={` ${fix && "fixed left-4 sm:left-auto bottom-10 right-4 "}  ${
        abs &&
        "absolute top-24 px-4 sm:px-10 w-full flex items-center justify-center"
      } z-10`}
    >
      <div className="bg-green-300 duration-300 p-3 flex gap-3">
        <div>
          <FaCheckCircle className="text-2xl" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-medium">{text}</h1>
          {close && (
            <button
              onClick={() => setAlert(false)}
              className="p-2 w-16 cursor-pointer rounded bg-black text-white"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
