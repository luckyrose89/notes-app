import React from "react";
import axios from "axios";

const notebookAxios = axios.create();

class AppContextProvider extends React.Component {
  state = {
    notebooks: []
  };

  componentDidMount() {
    this.getNotebooks();
  }

  getNotebooks = () => {
    return notebookAxios.get("/notebook").then(response => {
      this.setState({ notebooks: response.data });
      return response;
    });
  };

  createNotebook = newNotebook => {
    return notebookAxios.post("/notebook", newNotebook).then(response => {
      this.setState(prevState => {
        return { notebooks: [...prevState.notebooks, response.data] };
      });
      return response;
    });
  };

  getOneNotebook = bookId => {
    return notebookAxios.get(`/notebook/${bookId}`).then(response => {
      return response.data;
    });
  };

  //   editOneNotebook = (bookId, bookObj) => {
  //     return notebookAxios
  //       .put(`/notebook/${bookId}`, bookObj)
  //       .then(response => {});
  //   };
  deleteOneNotebook = () => {};

  createNotepage = () => {};
  getOneNotepage = () => {};
  editOneNotepage = () => {};
  deleteOneNotepage = () => {};

  render() {
    return <div>This is where we provide a consumer</div>;
  }
}

export default AppContextProvider;
