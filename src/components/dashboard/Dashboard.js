import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CreateBook from "./CreateBook";
import ViewBook from "./ViewBook";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/dashboard/createBook">
          <p>Create New Notebook</p>
        </Link>
        <Link to="/dashboard/viewBook">
          <p>View Notebooks</p>
        </Link>
        <Switch>
          <Route path="/dashboard/createbook" component={CreateBook} />
          <Route path="/dashboard/viewbook" component={ViewBook} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
