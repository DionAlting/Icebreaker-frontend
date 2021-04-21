import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { LoginHost } from "../redux/user/actions";
import { user } from "../redux/user/selectors";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isHost } = useSelector(user);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    const user = {
      username,
      password,
    };
    dispatch(LoginHost(user));
  };

  if (isHost) return <Redirect to="/admin/questions" />;
  return (
    <div className="flex flex-col items-center justify-center h-screen mb-6">
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-lg"
        onSubmit={handleLoginSubmit}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-blue-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
