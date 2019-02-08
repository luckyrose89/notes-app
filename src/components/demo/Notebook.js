import React from "react";
import NotePage from "./NotePage";
import ViewNotebook from "./ViewNotebook";
import ViewNotes from "./ViewNotes";
import ViewFlashCards from "./ViewFlashcards";

class Notebook extends React.Component {
  state = {
    title: this.props.location.state.title,
    visible: 1,
    pageCount: 0,
    flashcards: false,
    notebook: [
      { title: "", questionAnswer: [{ ques: "", ans: "" }], summary: "" }
    ]
  };

  resetVisible = () => {
    this.setState({
      visible: 1
    });
  };

  handleNoteAdded = () => {
    this.setState({
      visible: 2
    });
  };
  handleAddNotes = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    notebookCopy[id].questionAnswer.push({ ques: "", ans: "" });
    this.setState({
      notebook: notebookCopy
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.resetVisible();
    this.setState({
      pageCount: this.state.pageCount + 1
    });
  };

  handleChange = () => {
    let notebookCopy = this.state.notebook.slice();
    let id = this.state.pageCount;
    if (["ques", "ans"].includes(event.target.className)) {
      let questionAnswer = notebookCopy[id].questionAnswer;
      questionAnswer[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({ notebook: notebookCopy });
    } else {
      notebookCopy[id][event.target.name] = event.target.value;
      this.setState({ notebook: notebookCopy });
    }
  };

  handleViewNotes = () => {
    this.setState({
      visible: 3
    });
  };

  handleCreateFlashCards = () => {
    this.setState({
      flashcards: true,
      visible: 4
    });
  };

  render() {
    let { title, visible, pageCount, notebook, flashcards } = this.state;
    return (
      <div>
        {visible === 1 && (
          <ViewNotebook
            pageCount={pageCount}
            title={title}
            flashcards={flashcards}
            addNoteHandler={this.handleNoteAdded}
            viewNotesHandler={this.handleViewNotes}
            createFlashCardHandler={this.handleCreateFlashCards}
            ViewFlashCardHandler={this.handleCreateFlashCards}
          />
        )}
        {visible === 2 && (
          <NotePage
            notebookData={notebook[pageCount]}
            controlFunc={this.handleChange}
            addNotesFunc={this.handleAddNotes}
            submitFormFunc={this.handleSubmitForm}
          />
        )}
        {visible === 3 && (
          <ViewNotes notebook={notebook} backHandler={this.resetVisible} />
        )}
        {visible === 4 && (
          <ViewFlashCards
            notebook={notebook}
            title={title}
            backHandler={this.resetVisible}
          />
        )}
      </div>
    );
  }
}

export default Notebook;
