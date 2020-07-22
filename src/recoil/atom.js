import {atom} from "recoil/dist";

// Atoms are the single source of truth in our applications. Similar to Store in redux.

// Atoms are units of state

// Atoms are updateable and subscribable

/**
 *
 * @type {RecoilState<unknown>}
 */
export const countState = atom({
  key: 'countState', // Key must be unique
  default: 0 // This can be any JS data type
});

export const randomDataState = atom({
  key: 'randomDataState',
  default: []
})