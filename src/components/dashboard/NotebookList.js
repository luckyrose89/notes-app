import React from "react";
import axios from "axios";

class NotebookList extends React.Component {
  handleDelete = () => {
    axios
      .get("http://localhost:3001/notebook/delete/" + this.props.obj._id)
      .then(console.log("Entry Deleted"))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <li>
        <div>{this.props.obj.title}</div>
        <button onClick={this.handleDelete()}>Delete</button>
        <button>Edit</button>
        <button>Add Page</button>
        <button>View</button>
      </li>
    );
  }
}

export default NotebookList;
