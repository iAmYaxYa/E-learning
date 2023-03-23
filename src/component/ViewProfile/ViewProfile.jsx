import React from "react";

const ViewProfile = ({ avator, username, email }) => {
  return (
    <div className="flex flex-col gap-4 items-center py-4 dark:border-slate-500 bg-neutral-100 rounded dark:bg-slate-800">
      <div className="bg-main dark:bg-sky-500 profile h-40 w-40 flex items-center justify-center rounded-full cursor-pointer">
        <div className="text-7xl font-bold uppercase text-md text-white">
          {avator}
        </div>
      </div>
      <div>
        <h1 className="text-lg font-medium text-center dark:text-white capitalize">
          {username}
        </h1>
        <p className="dark:text-slate-300 text-center">{email}</p>
      </div>
    </div>
  );
};

export default ViewProfile;
