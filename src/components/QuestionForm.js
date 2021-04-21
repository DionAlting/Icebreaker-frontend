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
        <h1 className="text-gray-800">Create new question</h1>
      </div>

      <form className="" onSubmit={onFormSubmit}>
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Question"
          onChange={(event) => setQuestion(event.target.value)}
        />
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Group Name"
          onChange={(event) => setGroupName(event.target.value)}
        />
        <input
          className="w-full px-4 py-2 mt-4 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Secret Number"
          onChange={(event) => setTargetNumber(event.target.value)}
        />

        <div class="">
          <button
            class="bg-red-500 hover:bg-green-700 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
