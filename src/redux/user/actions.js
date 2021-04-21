import io from "socket.io-client";
const socket = io("http://localhost:4001");

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
      console.log(user);
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
      console.log(user);
      dispatch(LoginSuccess(user));
    });
    socket.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};
