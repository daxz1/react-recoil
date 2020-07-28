import React from "react";
import {useRecoilState, useRecoilValue} from "recoil/dist";
import { countState } from "./atom";
import { incrementSelector } from "./selector";
import { Main } from '../components';

/**
 *
 * @returns {*}
 * @constructor
 */
function Example() {
  //
  // To read and write to an atom from a component, we use the hook called
  // useRecoilState. Just like React useState - The main difference being it
  // can be shared between component.
  //
  const [count, setCount] = useRecoilState(countState);

  //
  // To read just the value we use the hook useRecoilValue, this can accept either
  // a atom or selector. useRecoilValue is read only.
  //
  let value = useRecoilValue(incrementSelector);
  return (
    <Main example='Recoil' handleOnClick={()=> setCount(value)} count={count}/>
  )
}

export default Example;
