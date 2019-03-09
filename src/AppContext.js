import React from "react";
import axios from "axios";

const notebookAxios = axios.create();

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  state = {
    notebooks: [],
    loading: true
  };

  componentDidMount() {
    this.getNotebooks();
  }

  getNotebooks = () => {
    return notebookAxios.get("/notebook").then(response => {
      this.setState({ notebooks: response.data, loading: false });
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

  editOneNotebook = (bookId, bookObj) => {
    return notebookAxios.put(`/notebook/${bookId}`, bookObj).then(response => {
      this.setState(prevState => {
        const updatedBooks = prevState.notebooks.map(book => {
          return book._id === response.data._id ? response.data : book;
        });
        return { notebooks: updatedBooks };
      });
      return response;
    });
  };

  deleteOneNotebook = bookId => {
    return notebookAxios.delete(`/notebook/${bookId}`).then(response => {
      this.setState(prevState => {
        const updatedBooks = prevState.notebooks.filter(book => {
          return book._id !== bookId;
        });
        return { notebook: updatedBooks };
      });
      return response;
    });
  };

  createNotepage = () => {};
  getOneNotepage = () => {};
  editOneNotepage = () => {};
  deleteOneNotepage = () => {};

  render() {
    return (
      <AppContext.Provider
        value={{
          getNotebooks: this.getNotebooks,
          createNotebook: this.createNotebook,
          getOneNotebook: this.getOneNotebook,
          deleteOneNotebook: this.deleteOneNotebook,
          getOneNotepage: this.getOneNotepage,
          createNotepage: this.createNotepage,
          editOneNotepage: this.editOneNotepage,
          deleteOneNotepage: this.deleteOneNotepage,
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const withContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
};
