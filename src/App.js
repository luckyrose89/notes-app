import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Notebook from "./components/demo/Notebook";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to="/">
            <h2>Welcome to FlashNotes</h2>
          </Link>
          <Link to="/demo">
            <p>Demo</p>
          </Link>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Switch>
            <Route exact path="/demo" component={Demo} />
            <Route path="/notebook" component={Notebook} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
