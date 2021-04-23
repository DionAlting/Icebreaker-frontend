import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../redux/admin/selectors";
import { FetchQuestions, ChangeQuestionState } from "../redux/admin/actions";

import socket from "../util/socket";

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
        <h1 className="mb-4 text-xl font-bold text-gray-800">Questions</h1>
      </div>
      <table className="table w-full p-4 bg-white rounded-t-lg shadow">
        <thead className="text-white bg-blue-400">
          <tr>
            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              Question
            </th>
            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              Target
            </th>
            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              Yes
            </th>
            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              No
            </th>
            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              Group
            </th>

            <th className="p-4 font-normal border-b-2 dark:border-dark-5 whitespace-nowrap">
              Answered
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {allQuestions.map((question) => (
            <tr className="text-gray-700" key={question.id}>
              <td className="p-4 border-b-2 dark:border-dark-5">
                {question.question}
              </td>
              <td className="p-4 border-b-2 dark:border-dark-5">
                {question.targetNumber}
              </td>
              <td className="p-4 border-b-2 dark:border-dark-5">
                {
                  question.answers.filter((answer) => answer.answer === true)
                    .length
                }
              </td>
              <td className="p-4 border-b-2 dark:border-dark-5">
                {
                  question.answers.filter((answer) => answer.answer === false)
                    .length
                }
              </td>
              <td className="p-4 border-b-2 dark:border-dark-5">
                {question.groupName}
              </td>

              <td className="p-4 border-b-2 dark:border-dark-5">
                <button
                  className="p-2 text-white bg-red-400 rounded-lg hover:bg-red-500"
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
