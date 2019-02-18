// Create Notebook Page Component

import React from "react";
import axios from "axios";
import SingleInput from "./SingleInput";
import QuestionAnswer from "./QuestionAnswer";

class CreatePage extends React.Component {
  state = {
    title: "",
    questionAnswer: [{ question: "", answer: "" }],
    summary: ""
  };

  handleChange = event => {
    if (["question", "answer"].includes(event.target.className)) {
      let quesAns = this.state.questionAnswer.slice();
      quesAns[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({
        questionAnswer: quesAns
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleAddNotes = () => {
    let quesAns = this.state.questionAnswer.slice();
    quesAns.push({ question: "", answer: "" });
    this.setState({
      questionAnswer: quesAns
    });
  };

  handleRemoveNotes = () => {
    let quesAns = this.state.questionAnswer.slice();
    if (quesAns.length > 1) {
      quesAns.pop();
      this.setState({
        questionAnswer: quesAns
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    let data = {
      title: this.state.title,
      questionAnswer: this.state.questionAnswer,
      summary: this.state.summary
    };
    axios
      .post(
        "http://localhost:3001/notebook/addPage/" + this.props.match.params.id,
        data
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { title, questionAnswer, summary } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SingleInput
            inputType={"text"}
            title={"Title"}
            name={"title"}
            content={title}
            controlFunc={this.handleChange}
            placeholder={"Enter Title"}
          />
          <QuestionAnswer
            questionAnswer={questionAnswer}
            controlFunc={this.handleChange}
          />
          <input type="button" value="Add Note" onClick={this.handleAddNotes} />
          <input
            type="button"
            value="Delete Note"
            onClick={this.handleRemoveNotes}
          />
          <SingleInput
            inputType={"text"}
            title={"Summary"}
            name={"summary"}
            content={summary}
            controlFunc={this.handleChange}
            placeholder={"Enter Summary"}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default CreatePage;
