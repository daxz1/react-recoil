import React from "react";
import {
  Link
} from "react-router-dom";

/**
 *
 * @returns {*}
 */
function Nav() {
  return (
  <nav className='navigation'>
    <ul className='menu'>
      <li className='menu__item'>
        <Link to='/'> Recoil</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-redux'>Recoil vs Redux</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-state'>Recoil vs State</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/recoil-profile'>Recoil Profile</Link>
      </li>
      <li className='menu__item'>
        <Link to='/examples/prop-drilling'>Prop Drilling</Link>
      </li>
    </ul>
  </nav>
)};

export default Nav;