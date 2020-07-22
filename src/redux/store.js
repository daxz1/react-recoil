import { createStore } from "redux";
import countReducer from "./reducer";

/**
 *
 * @type {*}
 */
const store = createStore(countReducer);

export default store