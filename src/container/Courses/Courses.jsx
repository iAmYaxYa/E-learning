import { Categories } from "../../component";
import { CategoriesContextProvider } from "../../Context/CategoriesContextProvider/CategoriesContextProvider";

const Courses = () => {
  return (
    <div className="w-full min-h-screen dark:bg-slate-900 py-28">
      <CategoriesContextProvider>
        <Categories />
      </CategoriesContextProvider>
    </div>
  );
};

export default Courses;
