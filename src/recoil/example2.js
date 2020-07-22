import React, { Suspense } from "react";
import { useRecoilValue } from "recoil/dist";
import { getRandomDataSelector } from "./selector";

export default () => {
  const randomData = useRecoilValue(getRandomDataSelector)
  return (
    <div>
      <h1>Example of Loading Random Data</h1>
      { randomData.map(data => {
        return (
          <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
          </div>
        )
      })}
    </div>
  )
};
