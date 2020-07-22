import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
  selector
} from 'recoil';

import { usernameState } from "./atom";
import { usernameSelector } from "./selector";

const UseRecoilExample = () => {
  return (
    <div className='container'>
      <Nav />
      <Count />
      <Profile />

    </div>)
}

const Nav = () => {
  const username = useRecoilValue(usernameState);
  return (
    <p>Profile: {username}</p>
  )
}

const Count = () => {
  const count = useRecoilValue(usernameSelector);
  return (
    <p>Count: {count}</p>
  )
}

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
