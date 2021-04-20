import io from "socket.io-client";
const socket = io("http://localhost:4001");

const SignUpSuccess = (user) => {
  return {
    type: "user-SignUpSuccess",
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
