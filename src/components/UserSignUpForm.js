import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../redux/user/actions";

const UserSignUpForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    dispatch(SignUp(name));
  };
  return (
    <div className="flex flex-row">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="px-4 py-2 mt-5 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        <button className="px-4 py-2 ml-3 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
