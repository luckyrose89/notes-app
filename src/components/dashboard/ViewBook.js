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
      return <NotebookList obj={book} key={idx} />;
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
