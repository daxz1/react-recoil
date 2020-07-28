import React from 'react';

/**
 *
 * @param example
 * @param handleOnClick
 * @param count
 * @returns {*}
 */
function main ({ example, handleOnClick, count}) {
  return (
    <div className='container'>
      <h1 className='heading'>Example Using: {example}</h1>
      <p>Number of Times Clicked: {count}</p>
      <p>
        <button onClick={handleOnClick}>Click Me</button>
      </p>
    </div>
  );
}

export default main;