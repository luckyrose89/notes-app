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
        <Link to={"/edit/" + this.props.obj._id}>
          <button>Edit</button>
        </Link>
        <button>Add Page</button>
        <button>View</button>
      </li>
    );
  }
}

export default NotebookList;
