import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Dashboard from "./components/dashboard/Dashboard";
import Notebook from "./components/demo/Notebook";
import Header from "./components/Landing/Header";
import CreateBook from "./components/dashboard/Notebook/CreateBook";
import ViewBooks from "./components/dashboard/Notebook/ViewBooks";
import EditNotebook from "./components/dashboard/Notebook/EditNotebook";
import ViewPage from "./components/dashboard/Notepage/ViewPage";
import CreatePage from "./components/dashboard/Notepage/CreatePage";
import EditPage from "./components/dashboard/Notepage/EditPage";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/demo" component={Demo} />
            <Route path="/notedemo" component={Notebook} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/viewbooks" component={ViewBooks} />
            <Route path="/createbook" component={CreateBook} />
            <Route path="/edit/:id" component={EditNotebook} />
            <Route path="/notebook/:id" component={ViewPage} />
            <Route path="/createpage/:id" component={CreatePage} />
            <Route path="/editpage/:bookid/:id" component={EditPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
