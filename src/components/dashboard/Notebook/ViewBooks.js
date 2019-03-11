// View notebooks stored in database

import React from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../../AppContext";

const ViewBooks = props => {
  const notebooks = props.notebooks.map((book, idx) => {
    return (
      <div key={idx}>
        <div>{book.title}</div>
        <button onClick={() => props.deleteOneNotebook(book._id)}>
          Delete
        </button>
        <Link to={"/edit/" + book._id}> Edit </Link>
        <Link to={"/notebook/" + book._id}> View </Link>
      </div>
    );
  });
  if (props.loading === true) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <p>These are your notebooks</p>
        {notebooks}
      </div>
    );
  }
};

export default withContext(ViewBooks);
