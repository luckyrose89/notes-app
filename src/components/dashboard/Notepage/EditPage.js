import React from "react";
import { withContext } from "../../../AppContext";
import SingleInput from "../../Inputs/SingleInput";
import QuestionAnswer from "../../Inputs/QuestionAnswer";

class EditPage extends React.Component {
  state = {
    title: "",
    questionAnswer: [{ question: "", answer: "" }],
    summary: "",
    loading: true
  };

  componentDidMount() {
    this.props
      .getOneNotepage(
        this.props.match.params.bookid,
        this.props.match.params.id
      )
      .then(response => {
        this.setState({
          title: response.title,
          questionAnswer: response.questionAnswer,
          summary: response.summary,
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
    this.props
      .editOneNotepage(
        this.props.match.params.bookid,
        this.props.match.params.id,
        this.state
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

export default withContext(EditPage);
