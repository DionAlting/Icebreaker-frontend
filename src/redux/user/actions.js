import io from "socket.io-client";
const socket = io("https://codaisseur-ice-breaker.herokuapp.com");

const SignUpSuccess = (user) => {
  return {
    type: "user-SignUpSuccess",
    payload: user,
  };
};

const LoginSuccess = (user) => {
  return {
    type: "user-LoginSuccess",
    payload: user,
  };
};

export const SignUp = (name) => async (dispatch, getState) => {
  try {
    socket.emit("create_user", name);
    socket.on("created_user", (user) => {
      dispatch(SignUpSuccess(user));
    });
  } catch (error) {
    console.log(error);
  }
};

export const LoginHost = (user) => async (dispatch) => {
  try {
    socket.emit("login_host", user);
    socket.on("logged_in_host", (user) => {
      dispatch(LoginSuccess(user));
    });
    socket.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

export const submitAnswer = (userAnswer) => async (dispatch) => {
  try {
    socket.emit("create_answer", userAnswer);
    socket.emit("get_answers_by_questionId", userAnswer.questionId);
  } catch (error) {
    console.log(error.message);
  }
};

export const setNewQuestion = (question) => {
  return {
    type: "user-NewQuestion",
    payload: question,
  };
};
