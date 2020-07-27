import { selector } from "recoil/dist";
import {countState, usernameState} from "./atom";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Used in example 1
 * @type {RecoilValueReadOnly<unknown>}
 */
export const incrementSelector = selector({
  key: 'increment',
  get: ({get}) => {
    const currentCount = get(countState);
    return currentCount + 1;
  }
})

/**
 * Used in example 2
 * @type {RecoilValueReadOnly<unknown>}
 */
export const getRandomDataSelector = selector({
  key: 'randomDataList',
  get: async ({ get }) => {
    await sleep(5000);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    return json;
  }
})

/**
 *
 * @type {RecoilValueReadOnly<unknown>}
 */
export const usernameSelector = selector({
  key: 'usernameSelector',
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  }
});