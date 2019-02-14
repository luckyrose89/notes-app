import React from "react";
import { Link } from "react-router-dom";

class NotebookList extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.obj.title}</div>
        <button onClick={() => this.props.delete(this.props.obj._id)}>
          Delete
        </button>
        <Link to={"/edit/" + this.props.obj._id}> Edit </Link>
        <Link to={"/notebook/" + this.props.obj._id}> View </Link>
      </li>
    );
  }
}

export default NotebookList;
