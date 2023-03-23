import { useContext } from "react";
import { SingleContext } from "../../container/Course/Course";
const List = ({
  title,
  type,
  size,
  border,
  borderT,
  borderB,
  padding,
  icon,
  flex,
}) => {
  const { singleCourse, isLoading } = useContext(SingleContext);

  return (
    <div className="px-4 sm:px-10 py-10">
      <div
        className={`${padding} ${border} ${borderB} ${borderT} w-full lg:w-[50%]`}
      >
        <h1 className="dark:text-white text-2xl">{title}</h1>
        <ul
          className={`${flex} items-center flex-wrap mt-4 gap-2 justify-between`}
        >
          {type.map((learn) => (
            <li
              className="basis-full md:basis-[48%] flex items-center gap-3"
              key={learn.id}
            >
              <span className={`dark:text-white  ${size && "text-[8px]"}`}>
                {icon}
              </span>
              <span className="capitalize dark:text-slate-300 text-sm">
                {learn.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
