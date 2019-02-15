import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Dashboard from "./components/dashboard/Dashboard";
import Notebook from "./components/demo/Notebook";
import Header from "./components/Landing/Header";
import CreateBook from "./components/dashboard/Notebook/CreateBook";
import ViewBooks from "./components/dashboard/Notebook/ViewBooks";
import EditNotebook from "./components/dashboard/Notebook/EditNotebook";
import ViewNotebook from "./components/dashboard/Notepage/ViewNotebook";
import CreatePage from "./components/dashboard/Notepage/CreatePage";
import EditPage from "./components/dashboard/Notepage/EditPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/demo" component={Demo} />
            <Route path="/notedemo" component={Notebook} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/viewbooks" component={ViewBooks} />
            <Route path="/createbook" component={CreateBook} />
            <Route path="/edit/:id" component={EditNotebook} />
            <Route path="/notebook/:id" component={ViewNotebook} />
            <Route path="/createpage/:id" component={CreatePage} />
            <Route path="/editpage/:id" component={EditPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
