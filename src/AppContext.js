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

  // bug in createNotebook function
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

  // test delete feature after change in return response
  deleteOneNotebook = bookId => {
    return notebookAxios.delete(`/notebook/${bookId}`).then(response => {
      this.setState(prevState => {
        const updatedBooks = prevState.notebooks.filter(book => {
          return book._id !== bookId;
        });
        return { notebooks: updatedBooks };
      });
      // this.componentDidMount();
      return response;
    });
  };

  createNotepage = (bookId, notepage) => {
    return notebookAxios
      .post(`/notebook/add/${bookId}`, notepage)
      .then(response => {
        this.setState(prevState => {
          const updatedNotebooks = prevState.notebooks.map(book => {
            if (book._id === bookId) {
              return book.notes.push(response.data);
            }
          });
          return { notebooks: updatedNotebooks };
        });
        this.componentDidMount();
        return response;
      });
  };

  getOneNotepage = (bookId, noteId) => {
    return notebookAxios
      .get(`/notebook/${bookId}/notes/${noteId}`)
      .then(response => {
        return response.data;
      });
  };

  editOneNotepage = (bookId, noteId) => {};

  deleteOneNotepage = (bookId, noteId) => {};

  render() {
    return (
      <AppContext.Provider
        value={{
          getNotebooks: this.getNotebooks,
          createNotebook: this.createNotebook,
          getOneNotebook: this.getOneNotebook,
          editOneNotebook: this.editOneNotebook,
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
