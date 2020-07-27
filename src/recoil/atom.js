import {
  atom
} from "recoil/dist";

// Atoms are the single source of truth in our applications. Similar to Store in redux.

// Atoms are units of state

// Atoms are updatable and subscribable

/**
 *
 * @type {RecoilState<unknown>}
 */
export const countState = atom({
  key: 'count', // Key must be unique
  default: 0 // This can be any JS data type
});

/**
 *
 * @type {RecoilState<unknown>}
 */
export const randomDataState = atom({
  key: 'randomDataState',
  default: []
})

/**
 *
 * @type {RecoilState<string>}
 */
export const usernameState = atom({
  key: 'username',
  default: 'Dav Singh'
})