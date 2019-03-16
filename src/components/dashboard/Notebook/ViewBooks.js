// View notebooks stored in database

import React from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../../AppContext";

class ViewBooks extends React.Component {
  render() {
    const notebooks = this.props.notebooks.map((book, idx) => {
      return (
        <div key={idx}>
          <div>{book.title}</div>
          <button onClick={() => this.props.deleteOneNotebook(book._id)}>
            Delete
          </button>
          <Link to={"/edit/" + book._id}> Edit </Link>
          <Link to={"/notebook/" + book._id}> View </Link>
        </div>
      );
    });
    return (
      <div>
        <p>These are your notebooks</p>
        {notebooks}
      </div>
    );
  }
}

export default withContext(ViewBooks);
