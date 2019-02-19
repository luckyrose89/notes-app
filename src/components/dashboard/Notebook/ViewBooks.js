// View notebooks stored in database

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewBooks extends React.Component {
  state = {
    notebooks: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/notebook")
      .then(response => {
        this.setState({
          notebooks: response.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = val => {
    console.log("I'm supposed to delete, " + val);
    axios
      .delete("http://localhost:3001/notebook/" + val)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    let { loading, notebooks } = this.state;
    if (loading === true) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <p>These are your notebooks</p>
        {notebooks.map((book, idx) => {
          return (
            <div key={idx}>
              <div>{book.title}</div>
              <button onClick={() => this.handleDelete(book._id)}>
                Delete
              </button>
              <Link to={"/edit/" + book._id}> Edit </Link>
              <Link to={"/notebook/" + book._id}> View </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewBooks;
