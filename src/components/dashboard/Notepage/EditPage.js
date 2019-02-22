import React from "react";
import axios from "axios";
import SingleInput from "./SingleInput";
import QuestionAnswer from "./QuestionAnswer";

class EditPage extends React.Component {
  state = {
    title: "",
    questionAnswer: [{ question: "", answer: "" }],
    summary: "",
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:3001/notebook/edit/" +
          this.props.match.params.bookid +
          "/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          title: response.data.title,
          questionAnswer: response.data.questionAnswer,
          summary: response.data.summary,
          loading: false
        });
      });
  }

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
        "http://localhost:3001/notebook/edit/" +
          this.props.match.params.bookid +
          "/" +
          this.props.match.params.id,
        data
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/viewbooks");
  };

  render() {
    let { title, questionAnswer, summary, loading } = this.state;
    if (loading === true) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SingleInput
            inputType={"text"}
            title={"Title"}
            name={"title"}
            content={title}
            controlFunc={this.handleChange}
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
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default EditPage;
