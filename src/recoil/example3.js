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
const UseRecoilExample = () => {
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
