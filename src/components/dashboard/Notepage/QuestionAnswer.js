import React from "react";

const QuestionAnswer = props => {
  return props.questionAnswer.map((val, idx) => {
    let quesId = `question-${idx}`,
      ansId = `answer-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={quesId}> Question </label>
        <input
          type="text"
          name={quesId}
          data-id={idx}
          className="question"
          id={quesId}
          value={props.questionAnswer[idx].question}
          onChange={props.controlFunc}
        />
        <label htmlFor={ansId}> Answer </label>
        <input
          type="text"
          name={ansId}
          className="answer"
          data-id={idx}
          id={ansId}
          value={props.questionAnswer[idx].answer}
          onChange={props.controlFunc}
        />
      </div>
    );
  });
};

export default QuestionAnswer;
