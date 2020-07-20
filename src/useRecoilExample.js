import React, {useState} from 'react';
import RecoilRoot from 'recoil';

const UseStateExample = () => (
  <RecoilRoot>
    <Nav/>
    <Body/>
    <Profile/>
  </RecoilRoot>
)

const Nav = () => {
  return (
    <div>Profile: Username</div>
  )
}

const Body = () => {
  return (
    <div>Profile: Body</div>
  )
}


const Profile = () => {
  const [username, setUsername] = useState('Davinder Cheema')
  return (
    <div>
      <p>Welcome {username}</p>
      <div>
        <input type='text' value={username} onChange={event => setUsername(event.target.value)}/>
      </div>
    </div>
  )
}

export default UseStateExample;
