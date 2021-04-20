import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserSignUpForm from "../components/UserSignUpForm";
import { user } from "../redux/user/selectors";
import io from "socket.io-client";
const socket = io("http://localhost:4001");

const Home = () => {
  const [question, setQuestion] = useState([]);
  //const [timer, setTimer] = useState("");
  console.log(question);

  function onMessage() {
    socket.on("new_question", (question) => {
      console.log(question);
      setQuestion(question);
    });
    socket.emit("get_question");
  }

  useEffect(onMessage, []);

  const { isPlayer, username } = useSelector(user);

  return (
    <div className="container flex flex-col items-center justify-center h-screen m-auto">
      <div className="flex mt-20">
        <h1 className="text-6xl font-bold">Codaisseur Ice Breaking Game</h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        {isPlayer ? (
          <>
            <p className="text-4xl">
              <span className="px-4 py-2 bg-gray-400 rounded-lg shadow-md bg-opacity-40">
                {question.question}
              </span>{" "}
              <span className="font-extrabold">{username}?</span>
            </p>
            <div className="flex flex-row mt-10">
              <button className="w-32 px-4 py-2 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
                Yes
              </button>
              <button className="w-32 px-4 py-2 ml-5 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
                No
              </button>
            </div>
          </>
        ) : (
          <UserSignUpForm />
        )}
      </div>
    </div>
  );
};

export default Home;
