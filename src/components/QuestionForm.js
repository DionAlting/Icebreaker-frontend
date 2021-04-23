import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SubmitQuestion } from "../redux/admin/actions";

const QuestionForm = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [groupName, setGroupName] = useState("");
  const [targetNumber, setTargetNumber] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      question,
      groupName,
      targetNumber,
    };

    dispatch(SubmitQuestion(newQuestion));
    setQuestion("");
    setGroupName("");
    setTargetNumber("");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800">
          Create Question
        </h1>
      </div>

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
          onChange={(event) => setGroupName(event.target.value)}
        />
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 border-2 border-blue-100 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Secret Number"
          value={targetNumber}
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
