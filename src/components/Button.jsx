import React from "react";

const Button = (props) => {
  return (
    <button onClick = props.onClickFunction > {props.name} </button>
  )
}

module.exports = Button;
