import React from "react";

const Scoreboard = () => {
  //TODO: Fix the scoreboard.
  return (
    <table className="table p-4 bg-white shadow rounded-lg w-full">
      <thead>
        <tr>
          <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Question
          </th>
          <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
            Target Number
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {questions?.map((question) => (
          <tr className="text-gray-700" key={question.id}>
            <td className="border-b-2 p-4 dark:border-dark-5">
              {question.question}
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
              {question.targetNumber}
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default Scoreboard;
