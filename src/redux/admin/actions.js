import io from "socket.io-client";
const socket = io("https://codaisseur-ice-breaker.herokuapp.com");

const FetchQuestionsSuccess = (questions) => {
  return {
    type: "admin-FetchQuestionsSuccess",
    payload: questions,
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
      dispatch(FetchQuestions());
    });
    socket.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

export const ChangeQuestionState = (questionId) => async (dispatch) => {
  try {
    socket.emit("change_question_state", questionId);
    socket.on("question_status_changed", (question) => {
      dispatch(FetchQuestions());
    });
  } catch (error) {
    console.log(error);
  }
};
