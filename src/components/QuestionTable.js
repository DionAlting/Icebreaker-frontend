import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../redux/admin/selectors";
import { FetchQuestions } from "../redux/admin/actions";

const QuestionTable = () => {
  const dispatch = useDispatch();
  const allQuestions = useSelector(questions);

  useEffect(() => {
    dispatch(FetchQuestions());
  }, [dispatch]);
  return (
    <table class="table p-4 bg-white shadow rounded-lg w-full">
      <thead>
        <tr>
          <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            #
          </th>
          <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Question
          </th>
          <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Target Number
          </th>
          <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Group Name
          </th>
          <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Answered
          </th>
        </tr>
      </thead>
      <tbody>
        {allQuestions.map((question) => (
          <tr class="text-gray-700" key={question.id}>
            <td class="border-b-2 p-4 dark:border-dark-5">{question.id}</td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              {question.question}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              {question.targetNumber}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              {question.groupName}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              <button className="bg-red-400">Answered</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionTable;
