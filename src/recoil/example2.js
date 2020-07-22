import React from "react";
import { useRecoilValue } from "recoil/dist";
import { getRandomDataSelector } from "./selector";

/**
 *
 * @returns {*}
 * @constructor
 */
const Example2 = () => {
  const randomData = useRecoilValue(getRandomDataSelector)
  return (
    <div className='container'>
      <h1 className='heading'>Example of Loading Random Data</h1>
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

export default Example2;