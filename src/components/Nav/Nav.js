import React from "react";
import {
  Link
} from "react-router-dom";

export default () => (
  <nav className='navigation'>
    <ul className='menu'>
      <li className='menu__item'>
        <Link to='/'> Recoil</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-redux'> Recoil vs Redux</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-state'> Recoil vs State</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-profile'> Recoil Profile</Link>
      </li>
    </ul>
  </nav>
)