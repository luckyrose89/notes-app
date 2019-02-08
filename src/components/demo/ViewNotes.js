import React from "react";

const ViewNotes = props => {
  return (
    <div>
      <h2>Title</h2>
      <p>{props.notebook[0].title}</p>
      <div>
        <span>
          <h3>Question </h3>
        </span>
        <span>
          <h3> Answer</h3>
        </span>
      </div>
      {props.notebook[0].questionAnswer.map((item, id) => {
        return (
          <p key={id}>
            <span>{item.ques} </span>
            <span> {item.ans}</span>
          </p>
        );
      })}
      <h2>Summary</h2>
      <p>{props.notebook[0].summary}</p>
      <button onClick={props.backHandler}>Back</button>
    </div>
  );
};

export default ViewNotes;
