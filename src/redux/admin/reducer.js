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
    default:
      return state;
  }
};

export default adminReducer;
