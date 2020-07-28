import React from "react";
import { useRecoilValue } from "recoil/dist";
import { getRandomDataSelector } from "./selector";

/**
 *
 * @returns {*}
 * @constructor
 */
function Example() {
  //
  // To read just the value we use the hook useRecoilValue, this can accept either
  // a atom or selector. useRecoilValue is read only.
  //
  const randomData = useRecoilValue(getRandomDataSelector)
  return (
    <div className='container'>
      <h1 className='heading'>Example of Loading Async Data</h1>
      { randomData.map(({id, title}) => {
        return (
          <div key={id}>
            <p>{`${id} ${title}`}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Example;