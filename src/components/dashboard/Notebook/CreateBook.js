// Create Notebook and save to database

import React from "react";
import { withContext } from "../../../AppContext";

class CreateBook extends React.Component {
  state = {
    title: "",
    errorMessage: ""
  };

  handleNameChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      errorMessage: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .createNotebook(this.state)
      .then(response => {
        this.clearInputs();
        this.props.history.push("/dashboard");
      })
      .catch(err =>
        this.setState({
          errorMessage: err.response.data.message
        })
      );
  };

  render() {
    let { title } = this.state;
    return (
      <div>
        <p>This is where you create a notebook</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="notebookTitle">Notebook Title:</label>
          <input
            type="text"
            name="title"
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
