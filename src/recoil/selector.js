import { selector } from "recoil/dist";
import { countState } from "./atom";

export const incrementSelector = selector({
  key: 'increment',
  get: ({get}) => {
    const currentCount = get(countState);
    return currentCount + 1;
  }
})