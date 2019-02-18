// Input component for title & Summary

import React from "react";

const SingleInput = props => {
  return (
    <div>
      <label htmlFor="form-input">{props.title}</label>
      <input
        type={props.inputType}
        name={props.name}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SingleInput;
