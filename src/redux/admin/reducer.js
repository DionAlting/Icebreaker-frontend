const initialState = {
  questions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "admin-FetchQuestionsSuccess":
      return {
        ...state,
        questions: [...action.payload],
      };
    case "created_question":
      return {
        questions: [action.payload, ...state.questions],
      };
    default:
      return state;
  }
};

export default adminReducer;
