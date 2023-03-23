import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, ProtectedRoute, ScrollToTop, WatchCourse } from "./component";
import {
  Courses,
  Footer,
  Course,
  Home,
  About,
  Contact,
  LogIn,
  SignUp,
  Category,
  Learn,
  NotFound,
  MyLearning,
  Profile,
  CheckOut,
} from "./container";
import { ThemeContext } from "./Context/ThemeContextProvider/ThemeContextProvider";
import { CourseContextProvider } from "./Context/CourseContextProvider/CourseContextProvider";
import AuthenticationContextProvider from "./Context/AuthenticationContextProvider/AuthenticationContextProvider";
import "./index.css";

function App() {
  const { Dark, darkMode } = useContext(ThemeContext);
  return (
    <div className={`${Dark === "dark" ? "dark" : ""} p-0 overflow-x-hidden`}>
      <AuthenticationContextProvider>
        <CourseContextProvider>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:categoryid" element={<Category />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/course/:id/learn" element={
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            } />
            <Route path="/course/:id/learn" element={<WatchCourse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/mylearning"
              element={
                <ProtectedRoute>
                  <MyLearning />
                </ProtectedRoute>
              }
            />
             <Route
              path="/user/edit-profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
             <Route
              path="/check-out/:id"
              element={
                <ProtectedRoute>
                  <CheckOut />
                </ProtectedRoute>
              }
            />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CourseContextProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
