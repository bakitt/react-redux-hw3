import { SET_RANDOM_NUMBER } from "./Actions";

const initialState = {
  randomNumber: Math.floor(Math.random() * 100) + 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANDOM_NUMBER:
      return {
        ...state,
        randomNumber: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
