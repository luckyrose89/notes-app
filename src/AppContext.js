import React from "react";
import axios from "axios";

const notebookAxios = axios.create();

class AppContextProvider extends React.Component {
  render() {
    return <div>This is where we provide a consumer</div>;
  }
}

export default AppContextProvider;
