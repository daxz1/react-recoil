/**
 *
 */
import { INCREMENT_COUNT } from "./actions";

/**
 *
 * @type {{count: number}}
 */
const initialState = {
  count: 0
};

/**
 *
 * @param state
 * @param type
 * @returns {{count: number}}
 */
const reducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: ++state.count
      };
    default:
      return state;
  }
}

export default reducer;