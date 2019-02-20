// Create Notebook and save to database

import React from "react";
import axios from "axios";

class CreateBook extends React.Component {
  state = {
    title: ""
  };

  handleNameChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const obj = {
      title: this.state.title
    };

    axios
      .post("http://localhost:3001/notebook", obj)
      .then(res => console.log(res.data));

    this.setState({
      title: ""
    });

    this.props.history.push("/dashboard");
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
      </div>
    );
  }
}

export default CreateBook;
