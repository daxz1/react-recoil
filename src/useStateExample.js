import React, {useState} from 'react';

const UseStateExample = () => (
  <>
    <Nav/>
    <Body/>
    <Profile/>
  </>
)

const Nav = () => {
  return (
    <div>Nav</div>
  )
}

const Body = () => {
  return (
    <div>Body</div>
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
