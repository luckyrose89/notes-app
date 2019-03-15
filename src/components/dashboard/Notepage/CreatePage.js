// Create Notebook Page Component

import React from "react";
import SingleInput from "../../Inputs/SingleInput";
import QuestionAnswer from "../../Inputs/QuestionAnswer";
import { withContext } from "../../../AppContext";

class CreatePage extends React.Component {
  state = {
    title: "",
    questionAnswer: [{ question: "", answer: "" }],
    summary: "",
    errorMessage: ""
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

  clearInputs = () => {
    this.setState({
      title: "",
      summary: "",
      questionAnswer: [{ question: "", answer: "" }]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .createNotepage(this.props.match.params.id, this.state)
      .then(response => {
        this.clearInputs();
        this.props.history.push("/viewbooks");
      })
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.error
        });
      });
  };

  render() {
    let { title, questionAnswer, summary, errorMessage } = this.state;
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
        {errorMessage}
      </div>
    );
  }
}

export default withContext(CreatePage);
