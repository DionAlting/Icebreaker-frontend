const initialState = {
  isPlayer: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user-SignUpSuccess":
      return {
        isPlayer: true,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
