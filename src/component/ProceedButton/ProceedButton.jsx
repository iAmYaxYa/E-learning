import React from "react";

const ProceedButton = ({ total }) => {
  return (
    <div className="fixed md:static bottom-0 left-0 flex flex-col gap-3 w-full mt-0 md:mt-6 md:p-0 px-4 py-2 backdrop-blur-2xl">
      <div className="w-full md:w-[70%] pt-3 flex items-center md:hidden justify-between">
        <span className="dark:text-slate-200 text-xl font-medium">Total:</span>
        <span className="dark:text-slate-200 text-xl font-medium">
          ${total}
        </span>
      </div>
      <button className="bg-main text-white w-full md:w-[70%] dark:bg-sky-500 p-3 rounded">
        Proceed
      </button>
      <p className="dark:text-slate-200 text-center w-full md:w-[70%]">
        30-Day-Money-Back Guarantee
      </p>
    </div>
  );
};

export default ProceedButton;
