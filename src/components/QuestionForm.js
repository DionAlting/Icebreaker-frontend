import React from "react";

const Questions = () => {
  return (
    <div className="md:flex md:justify-center mb-6">
      <div className="w-1/3 bg-gray-400 h-12 text-center py-4">
        Create question
        <form className="">
          <div>
            <input
              className=" my-20 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Question"
            />
            <input
              className="  bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Group Name"
            />
            <input
              className="my-20  bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Secret Number"
            />
          </div>

          <div class="">
            <button
              class="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Ask the question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;
