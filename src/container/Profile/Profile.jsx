import React, { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AddNewInformation, Alert, ViewProfile } from "../../component";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";
const Profile = () => {
  const [alert, setAlert] = useState(false);
  const { user, setUser } = useContext(AuthenticationContext);
  const [newName, setNewname] = useState(user.username);
  const avator = user ? user.username.slice(0, 1) : null;

  const update = () => {
    if (newName !== user.username) {
      setAlert(true);
      setUser({ ...user, username: newName });
      setTimeout(() => {
        setAlert(false);
      }, 10000);
    }
  };
  return (
    <div className="min-h-screen dark:bg-slate-900 w-full py-28">
      <div className="px-4 sm:px-10 flex justify-between flex-wrap gap-y-5">
        <div className="w-full lg:w-[48%]">
          {/* ==================== View profile information ==================== */}
          <ViewProfile
            avator={avator}
            username={user.username}
            email={user.email}
          />
        </div>
        <div className="w-full lg:w-[48%] border dark:border-slate-600">
          {/* ======================= Add new information ======================= */}
          <AddNewInformation
            newName={newName}
            setNewname={setNewname}
            update={update}
          />
          {/* ======================= Alert ======================= */}
          {alert && (
            <Alert
              close={true}
              setAlert={setAlert}
              fix={true}
              text="Your changes have been successfully saved."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
