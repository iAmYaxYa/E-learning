import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationContextProvider/AuthenticationContextProvider";
const Form = ({ type, thirdinput }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "log in") {
      if (!email || !password) return;
    }
    if (type === "sign up") {
      if (!email || !password || !username) return;
      setUser({ username, email, password });
      navigate("/");
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {thirdinput && (
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
            pattern="^[A-Za-z0-9]{3,15}"
            type="text"
            placeholder="User Name *"
            className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
          />
        </div>
      )}
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          type="email"
          placeholder="Email *"
          className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          pattern="^[A-Za-z0-9]{6,100}"
          type="password"
          placeholder="Password *"
          className="text-lg p-3 dark:text-white dark:placeholder-slate-300 w-full sm:w-[80%] border border-slate-400 bg-transparent outline-0 rounded"
        />
      </div>
      <div>
        <button
          type="submit"
          className="text-xl p-3 bg-main uppercase text-white dark:bg-sky-500 cursor-pointer w-full sm:w-[80%] outline-0 rounded"
        >
          {type}
        </button>
      </div>
    </form>
  );
};

export default Form;
