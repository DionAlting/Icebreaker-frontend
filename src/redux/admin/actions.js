import io from "socket.io-client";
const socket = io("http://localhost:4001");

const FetchQuestionsSuccess = (questions) => {
  return {
    type: "admin-FetchQuestionsSuccess",
    payload: questions,
  };
};

const createdQuestion = (data) => {
  return {
    type: "created_question",
    payload: data,
  };
};

export const FetchQuestions = () => async (dispatch, getState) => {
  try {
    socket.emit("all_questions");
    socket.on("fetched_questions", (questions) => {
      dispatch(FetchQuestionsSuccess(questions));
    });
  } catch (error) {
    console.log(error);
  }
};

export const SubmitQuestion = (question) => async (dispatch) => {
  try {
    socket.emit("create_question", question);
    socket.on("new_question", (newQuestion) => {
      dispatch(createdQuestion(newQuestion));
    });
    socket.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};
