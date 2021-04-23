import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../redux/admin/selectors";
import { FetchQuestions, ChangeQuestionState } from "../redux/admin/actions";
import io from "socket.io-client";

const socket = io("http://localhost:4001");

const QuestionTable = () => {
  const dispatch = useDispatch();
  const allQuestions = useSelector(questions);

  useEffect(() => {
    dispatch(FetchQuestions());
  }, [dispatch]);

  function onMessage() {
    socket.on("new_answer_for_host", (answer) => {
      dispatch(FetchQuestions());
    });
  }

  useEffect(onMessage, [dispatch]);

  const handleQuestionState = (questionId) => {
    dispatch(ChangeQuestionState(questionId));
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-gray-800">Questions</h1>
      </div>
      <table className="table p-4 bg-white shadow rounded-lg w-full">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Question
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Target Number
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Yes
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              No
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Group Name
            </th>

            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Answered
            </th>
          </tr>
        </thead>
        <tbody>
          {allQuestions.map((question) => (
            <tr className="text-gray-700" key={question.id}>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {question.question}
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {question.targetNumber}
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {
                  question.answers.filter((answer) => answer.answer === true)
                    .length
                }
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {
                  question.answers.filter((answer) => answer.answer === false)
                    .length
                }
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                {question.groupName}
              </td>

              <td className="border-b-2 p-4 dark:border-dark-5">
                <button
                  className="bg-red-400"
                  onClick={() => handleQuestionState(question.id)}
                >
                  Answered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default QuestionTable;
