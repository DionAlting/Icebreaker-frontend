import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSignUpForm from "../components/UserSignUpForm";
import { user } from "../redux/user/selectors";
import { submitAnswer, setNewQuestion } from "../redux/user/actions";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";

const socket = io("https://codaisseur-ice-breaker.herokuapp.com");

const Home = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState([]);
  const [num, setNum] = useState(20);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const { isPlayer, username, id } = useSelector(user);

  function onMessage() {
    socket.on("new_question_for_user", (question) => {
      setQuestion(question);
      setNum(20);
      setIsTimeUp(false);
      intervalRef.current = setInterval(decreaseNum, 1000);
      dispatch(setNewQuestion(question));
    });
  }

  useEffect(onMessage, [dispatch]);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);
  useEffect(() => {
    if (num === 0) {
      clearInterval(intervalRef.current);
      setNum(0);
      setIsTimeUp(true);
    }
  }, [num]);

  const handleAnswerClick = (questionId, userId, answer) => {
    setIsTimeUp(true);
    const userAnswer = {
      questionId,
      userId,
      answer,
    };
    dispatch(submitAnswer(userAnswer));
  };

  return (
    <div className="grid h-screen grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-white">
      <div className="text-center col-span-full mt-44">
        <h1 className="text-6xl font-bold">Codaisseur Ice Breaker Game</h1>
      </div>
      <div className="col-span-full place-self-center">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center">
            {isPlayer ? (
              <>
                {question.question ? (
                  <>
                    <div className="my-5 text-3xl font-semibold">
                      {num <= 0 ? "Times up!" : `Time left ${num} seconds `}
                    </div>
                    <div className="py-5">
                      <p className="text-4xl">
                        <span className="px-4 py-2 bg-gray-400 rounded-lg shadow-md bg-opacity-40">
                          {question.question}
                        </span>
                        <span className="ml-4 font-extrabold">{username}?</span>
                      </p>
                    </div>

                    <div className="flex flex-row mt-5">
                      <button
                        disabled={isTimeUp}
                        onClick={() => handleAnswerClick(question.id, id, true)}
                        className="w-32 px-4 py-2 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md disabled:cursor-not-allowed disabled:opacity-50 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        Yes
                      </button>
                      <button
                        disabled={isTimeUp}
                        onClick={() =>
                          handleAnswerClick(question.id, id, false)
                        }
                        className="w-32 px-4 py-2 ml-5 text-lg font-semibold text-center text-white transition duration-200 ease-in bg-red-500 rounded-lg shadow-md disabled:cursor-not-allowed disabled:opacity-50 hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        No
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-4xl">
                    <span className="px-4 py-2 bg-gray-400 rounded-lg shadow-md bg-opacity-40">
                      No question yet...
                    </span>{" "}
                    {username}
                  </p>
                )}
              </>
            ) : (
              <UserSignUpForm />
            )}
          </div>
          <div className="ml-4 ">
            {isPlayer && question.question ? <Chart /> : null}
          </div>
        </div>
      </div>
      <div className="mb-10 mr-5 col-span-full place-self-end">
        <Link
          className="p-4 text-lg font-bold bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-900"
          to="/login"
        >
          Host Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
