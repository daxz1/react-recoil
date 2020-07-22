import { INCREMENT_COUNT } from "./actions";

const initialState = {
  count: 0
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: ++state.count};
    default:
      return state;
  }
}

export default reducer;