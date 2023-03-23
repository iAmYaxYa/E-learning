import React from "react";

const StudentsSayItem = ({ student }) => {
  return (
    <div
      className="md:flex bg-gray-100 shadow-md dark:shadow-slate-500 rounded-xl p-8 md:p-0
                   dark:bg-slate-800 w-full lg:w-[49%]"
    >
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none object-cover rounded-full mx-auto"
        src={student.avator}
        alt={student.name}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <div>
          <p className="text-lg font-medium dark:text-gray-300">
            “{student && student.body}”
          </p>
        </div>
        <div className="font-medium">
          <div className="text-main dark:text-sky-500 capitalize">
            {student && student.name}
          </div>
          <div className="text-slate-700 dark:text-slate-400 capitalize">
            {student && student.grade}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSayItem;
