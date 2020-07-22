import { selector } from "recoil/dist";
import { countState } from "./atom";

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

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
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    console.log(json);
    return json;
  }
})