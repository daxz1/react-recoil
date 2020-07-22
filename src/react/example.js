import React, {useState} from "react";
import {
  Main
} from "../components";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <Main example='React State' handleOnClick={() => setCount(count + 1)} count={count} />
  );
}

export default Example;