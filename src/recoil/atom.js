import {atom} from "recoil/dist";

export const countState = atom({
  key: 'count',
  default: 0
});
