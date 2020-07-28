import React from "react";

function Example1 (props) {
  return (
    <NestedComponent name='Dav Singh'/>
  );
}

const NestedComponent = (props) => {
  return <NestedComponent2 name={props.name}/>
}

const NestedComponent2 = (props) => {
  return (<div>{props.name}</div>);
}

export default Example1;