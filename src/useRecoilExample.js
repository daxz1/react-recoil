import React from 'react';
import {RecoilRoot, atom, useRecoilState, useRecoilValue, selector} from 'recoil';



const usernameState = atom({
  key: 'username',
  default: 'Davinder Cheema'
})

// Use selectors for derived data,
// in this example we want word
// count of our username.
const countState = selector({
  key: 'count',
  // "get fn" gives access to atom values
  get: ({get})=> {
    const username = get(usernameState);
    console.log(username);
    return username.length;
  }
});

const UseRecoilExample = () => {
  return (
  <RecoilRoot>
    <Nav />
    <Body />
    <Profile />
    <Count />
  </RecoilRoot>)
}

const Nav = () => {
  const username = useRecoilValue(usernameState);
  return (
    <div>Profile: {username}</div>
  )
}

const Body = () => {
  return (
    <div>Profile: Body</div>
  )
}

const Count = () => {
  const count = useRecoilValue(countState);
  return (
    <div>
      Count: {count}
    </div>
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
