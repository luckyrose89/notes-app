import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Dashboard from "./components/dashboard/Dashboard";
import Notebook from "./components/demo/Notebook";
import Header from "./components/Landing/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/demo" component={Demo} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notedemo" component={Notebook} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
