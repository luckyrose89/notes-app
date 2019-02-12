// View notebooks stored in database

import React from "react";
import axios from "axios";

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
      return (
        <li key={idx}>
          <div>{book.title}</div>
          <button>Add Page</button>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      );
    });
  }

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
