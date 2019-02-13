import React from "react";

class NotebookList extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.obj.title}</div>
        <button onClick={() => this.props.delete(this.props.obj._id)}>
          Delete
        </button>
        <button>Edit</button>
        <button>Add Page</button>
        <button>View</button>
      </li>
    );
  }
}

export default NotebookList;
