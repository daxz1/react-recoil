import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { usernameState } from "./atom";
import { usernameSelector } from "./selector";

/**
 *
 * @returns {*}
 * @constructor
 */
function UseRecoilExample() {
  return (
    <div className='container'>
      <Nav />
      <Count />
      <Profile />
    </div>)
}

/**
 *
 * @returns {*}
 * @constructor
 */
const Nav = () => {
  //
  // To read just the value we use the hook useRecoilValue, this can accept either
  // a atom or selector. useRecoilValue is read only.
  //
  const username = useRecoilValue(usernameState);
  return (
    <p>Profile: {username}</p>
  )
}

/**
 *
 * @returns {*}
 * @constructor
 */
const Count = () => {
  //
  // To read just the value we use the hook useRecoilValue, this can accept either
  // a atom or selector. useRecoilValue is read only.
  //
  const count = useRecoilValue(usernameSelector);
  return (
    <p>Count: {count}</p>
  )
}

/**
 *
 * @returns {*}
 * @constructor
 */
const Profile = () => {
  //
  // To read and write to an atom from a component, we use the hook called
  // useRecoilState. Just like React useState - The main difference being it
  // can be shared between component.
  //
  const [username, setUsername] = useRecoilState(usernameState);
  return (
    <div>
      <p>Welcome {username}</p>
      <div>
        <input type='text' value={username} onChange={event => setUsername(event.target.value)}/>
      </div>
    </div>
  )
}

export default UseRecoilExample;
