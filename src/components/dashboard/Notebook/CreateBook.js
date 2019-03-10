// Create Notebook and save to database

import React from "react";
import { withContext } from "../../../AppContext";

class CreateBook extends React.Component {
  state = {
    title: "",
    errorMessage: ""
  };

  handleNameChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      errorMessage: ""
    });
  };

  onSubmit = event => {
    event.preventDefault();
    var obj = this.state.title;
    console.log(obj);
    this.props
      .createNotebook(obj)
      .then(response => {
        this.clearInputs();
      })
      .catch(err => {
        this.setState({
          errorMessage: err.message
        });
      });
    // this.props.history.push("/dashboard");
  };

  render() {
    let { title } = this.state;
    return (
      <div>
        <p>This is where you create a notebook</p>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="notebookTitle">Notebook Title:</label>
          <input
            type="text"
            value={title}
            onChange={this.handleNameChange}
            id="bookTitle"
          />
          <div>
            <input type="submit" value="Save Notebook" />
          </div>
        </form>
        {this.state.errorMessage}
      </div>
    );
  }
}

export default withContext(CreateBook);
