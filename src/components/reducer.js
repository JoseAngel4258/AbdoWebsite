// reducers.js

const initialState = {
  isInVideoSection: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEO_SECTION_STATE":
      return {
        ...state,
        isInVideoSection: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;