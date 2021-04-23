import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitQuestion } from "../redux/admin/actions";

const QuestionForm = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [groupName, setGroupName] = useState("");
  const [targetNumber, setTargetNumber] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (question.length > 20)
      return setError("Question should be max 20 characters");

    const newQuestion = {
      question,
      groupName,
      targetNumber,
    };

    dispatch(SubmitQuestion(newQuestion));
    setQuestion("");
    setGroupName("");
    setTargetNumber("");
    setError("");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800">
          Create Question
        </h1>
      </div>
      {error && (
        <div
          className="p-4 text-red-600 bg-red-200 border-l-4 border-red-600"
          role="alert"
        >
          <p class="font-bold">Oops..</p>
          <p>{error}</p>
        </div>
      )}

      <form className="" onSubmit={onFormSubmit}>
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 border-2 border-blue-100 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 border-2 border-blue-100 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Group Name"
          value={groupName}
          required
          onChange={(event) => setGroupName(event.target.value)}
        />
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 border-2 border-blue-100 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Secret Number"
          value={targetNumber}
          required
          onChange={(event) => setTargetNumber(event.target.value)}
        />

        <div className="">
          <button
            className="px-4 py-2 mt-10 font-bold text-white bg-gray-700 rounded-lg hover:bg-gray-500 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ask the question
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
