import React from 'react';

/**
 *
 * @param example
 * @param handleOnClick
 * @param count
 * @returns {*}
 */
const main = ({ example, handleOnClick, count}) => (
  <div>
    <div>Example Using: {example}</div>
    <div>Number of Times Clicked: {count}</div>
    <div onClick={handleOnClick}>Click Me</div>
  </div>
);

export default main;