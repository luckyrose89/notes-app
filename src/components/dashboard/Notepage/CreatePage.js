import React from "react";
import axios from "axios";

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
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          {questionAnswer.map((val, idx) => {
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
                  value={questionAnswer[idx].question}
                  onChange={this.handleChange}
                />
                <label htmlFor={ansId}> Answer </label>
                <input
                  type="text"
                  name={ansId}
                  className="answer"
                  data-id={idx}
                  id={ansId}
                  value={questionAnswer[idx].answer}
                  onChange={this.handleChange}
                />
              </div>
            );
          })}
          <input type="button" value="Add Note" onClick={this.handleAddNotes} />
          <input
            type="button"
            value="Delete Note"
            onClick={this.handleRemoveNotes}
          />
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            name="summary"
            value={summary}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default CreatePage;