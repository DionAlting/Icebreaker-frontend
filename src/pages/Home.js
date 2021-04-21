import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import UserSignUpForm from "../components/UserSignUpForm";
import { user } from "../redux/user/selectors";
import io from "socket.io-client";
import { Link } from "react-router-dom";
const socket = io("http://localhost:4001");

const Home = () => {
  const [question, setQuestion] = useState([]);
  const [num, setNum] = useState(5);
  const [isTimeUp, setIsTimeUp] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  function onMessage() {
    socket.on("new_question_for_user", (question) => {
      setQuestion(question);
      setNum(5);
      setIsTimeUp(false);
      intervalRef.current = setInterval(decreaseNum, 1000);
    });
  }

  useEffect(onMessage, []);

  useEffect(() => {
    if (num === 0) {
      clearInterval(intervalRef.current);
      setNum(0);
      setIsTimeUp(true);
    }
  }, [num]);

  const handleAnswerClick = (questionId, userId, answer) => {
    setIsTimeUp(true);
    console.log(questionId, userId, answer);
  };

  const { isPlayer, username, id } = useSelector(user);

  return (
    <>
      <div className="container flex flex-col items-center justify-center h-screen m-auto">
        <div className="flex mt-20">
          <h1 className="text-6xl font-bold">Codaisseur Ice Breaking Game</h1>
        </div>
        <div className="flex flex-col items-center mt-10">
          {isPlayer ? (
            <>
              {question.question ? (
                <>
                  <div className="my-5">Time left {num}</div>
                  <p className="text-4xl">
                    <span className="px-4 py-2 bg-gray-400 rounded-lg shadow-md bg-opacity-40">
                      {question.question}
                    </span>
                    <span className="ml-4 font-extrabold">{username}?</span>
                  </p>
                  <div className="flex flex-row mt-10">
                    <button
                      disabled={isTimeUp}
                      onClick={() => handleAnswerClick(question.id, id, false)}
                      className="w-32 px-4 py-2 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md disabled:opacity-50 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Yes
                    </button>
                    <button
                      disabled={isTimeUp}
                      onClick={() => handleAnswerClick(question.id, id, false)}
                      className="w-32 px-4 py-2 ml-5 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-red-500 rounded-lg shadow-md disabled:opacity-50 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      No
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-4xl">No question yet...</p>
              )}
            </>
          ) : (
            <UserSignUpForm />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="mb-5 mr-10">
          <Link
            className="px-3 py-3 text-lg font-bold bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-900"
            to="/login"
          >
            Host Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
