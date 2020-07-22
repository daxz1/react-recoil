import React from "react";
import {useRecoilState, useRecoilValue} from "recoil/dist";
import { countState } from "./atom";
import { incrementSelector } from "./selector";
import { Main } from '../components';

export default () => {
  const [count, setCount] = useRecoilState(countState);
  let value = useRecoilValue(incrementSelector);
  return (
    <Main example='recoil' handleOnClick={()=> setCount(value)} count={count}/>
  )
}
