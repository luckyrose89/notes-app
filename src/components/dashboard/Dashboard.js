import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="create">
          <p>Create New Notebook</p>
        </Link>
        <Link to="view">
          <p>View Notebooks</p>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
