import React from "react";

/**
 *
 * @returns {*}
 * @constructor
 */
function Example () {
  return (
    <NestedComponent name='Dav Singh' age='Young'/>
  );
}

/**
 *
 * @param name
 * @param age
 * @returns {*}
 * @constructor
 */
const NestedComponent = ({ name, age }) => {
  return (
    <div className='container'>
      <div>
        Name: {name}
      </div>
      <NestedComponent2 age={age}/>
    </div>
  )
}

/**
 *
 * @param age
 * @returns {*}
 * @constructor
 */
const NestedComponent2 = ({ age }) => {
  return (
    <div>
      Age: {age}
    </div>
  );
}

export default Example;