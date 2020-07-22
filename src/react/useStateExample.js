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
    <div>Profile: Username</div>
  )
}

const Body = () => {
  return (
    <div>Profile: Body</div>
  )
}

/**
 * State is local to this component only. We could lift it up.
 * @returns {*}
 * @constructor
 */
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
