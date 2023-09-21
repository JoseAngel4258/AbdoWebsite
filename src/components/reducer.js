// reducers.js
const initialState = {
  isInVideoSection: false,
  isInHeroSection: false, // Agrega el estado para la sección "Hero"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEO_SECTION_STATE":
      return {
        ...state,
        isInVideoSection: action.payload,
      };
    case "SET_HERO_SECTION_STATE":
      return {
        ...state,
        isInHeroSection: action.payload, // Actualiza el estado de la sección "Hero"
      };
    default:
      return state;
  }
};

export default rootReducer;
