import React from 'react';
import { Main } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

export default () => {
  const count = useSelector(state => state.count );
  const dispatch = useDispatch();
  return (
    <Main
      example='Redux'
      count={count}
      handleOnClick={
        () => dispatch(increment())
      }
    />
  )
}