// View notebooks stored in database

import React from "react";
import axios from "axios";
import NotebookList from "./NotebookList";

class ViewBook extends React.Component {
  state = {
    notebooks: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/notebook")
      .then(response => {
        this.setState({
          notebooks: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  displayNotebooks() {
    return this.state.notebooks.map((book, idx) => {
      return <NotebookList delete={this.handleDelete} obj={book} key={idx} />;
    });
  }

  handleDelete = val => {
    let notebooksCopy = this.state.notebooks.filter(
      notebook => notebook._id !== val
    );
    axios
      .get("http://localhost:3001/notebook/delete/" + val)
      .then(console.log("Entry Deleted"))
      .catch(err => console.log(err));

    this.setState({
      notebooks: notebooksCopy
    });
  };

  render() {
    return (
      <div>
        <p>This is where you view notebooks</p>
        <ul>{this.displayNotebooks()}</ul>
      </div>
    );
  }
}

export default ViewBook;
