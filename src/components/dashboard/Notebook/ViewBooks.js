// View notebooks stored in database

import React from "react";
import { Link } from "react-router-dom";
import { withContext } from "../../../AppContext";

const ViewBooks = props => {
  // let { loading, notebooks } = this.state;
  // if (loading === true) {
  //   return <div>loading...</div>;
  // }
  return (
    <div>
      <p>These are your notebooks</p>
      {props.notebooks.map((book, idx) => {
        return (
          <div key={idx}>
            <div>{book.title}</div>
            <button onClick={() => this.handleDelete(book._id)}>Delete</button>
            <Link to={"/edit/" + book._id}> Edit </Link>
            <Link to={"/notebook/" + book._id}> View </Link>
          </div>
        );
      })}
    </div>
  );
};

export default withContext(ViewBooks);
