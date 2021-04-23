const initialState = {
  isPlayer: false,
  questions: [],
  answers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user-SignUpSuccess":
      return {
        ...state,
        isPlayer: true,
        ...action.payload,
      };
    case "user-LoginSuccess":
      return {
        ...state,
        isPlayer: true,
        ...action.payload,
      };
    case "user-NewQuestion":
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };
    default:
      return state;
  }
};

export default userReducer;
