import React from "react";

const NotePage = props => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={props.notebookData.title}
        onChange={props.controlFunc}
      />
      {props.notebookData.questionAnswer.map((val, idx) => {
        let quesId = `ques-${idx}`,
          ansId = `ans-${idx}`;

        return (
          <div key={idx}>
            <label htmlFor={quesId}> Question </label>
            <input
              type="text"
              name={quesId}
              data-id={idx}
              className="ques"
              id={quesId}
              value={props.notebookData.questionAnswer[idx].ques}
              onChange={props.controlFunc}
            />
            <label htmlFor={ansId}> Answer </label>
            <input
              type="text"
              name={ansId}
              className="ans"
              data-id={idx}
              id={ansId}
              value={props.notebookData.questionAnswer[idx].ans}
              onChange={props.controlFunc}
            />
          </div>
        );
      })}
      <input type="button" value="Add a Note" onClick={props.addNotesFunc} />
      <label htmlFor="summary">Summary</label>
      <input
        type="text"
        name="summary"
        value={props.notebookData.summary}
        onChange={props.controlFunc}
      />
      <input type="submit" value="Save" onClick={props.submitFormFunc} />
    </div>
  );
};

export default NotePage;
