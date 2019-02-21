// View First Page of Notebook

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewNotebook extends React.Component {
  state = {
    notes: [],
    loading: true,
    counter: 1,
    pageIndex: 1
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/notebook/" + this.props.match.params.id)
      .then(response => {
        let notes = response.data.notes;
        this.setState({
          notes: notes,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      pageIndex: event.target.value
    });
  };

  handleCounterChange = () => {
    if (this.state.pageIndex <= this.props.notes.length) {
      this.setState({
        counter: this.state.pageIndex
      });
    } else {
      alert("Sorry, requested page is not available!");
    }
  };

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
      pageIndex: this.state.pageIndex + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
      pageIndex: this.state.pageIndex - 1
    });
  };

  handleDelete = val => {
    axios
      .get(
        "http://localhost:3001/notebook/delete/" +
          this.props.match.params.id +
          "/" +
          val
      )
      .then(response => {
        this.componentDidMount();
        console.log(response.data.notes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { notes, loading, counter, pageIndex } = this.state;
    let notesLength = notes.length;

    if (loading === true) {
      return <div>Loading...</div>;
    }
    if (notes.length > 0) {
      return (
        <div>
          <div>
            <span>
              {counter - 1 > 0 && (
                <button onClick={this.handleDecrease}>prev</button>
              )}
              {counter + "/" + notesLength}
              {counter < notes.length && (
                <button onClick={this.handleIncrease}>next</button>
              )}
            </span>
            <h2>{notes[counter - 1].title}</h2>
            <div>
              {notes[counter - 1].questionAnswer.map((item, id) => {
                return (
                  <p key={id}>
                    <span>{item.question} </span>
                    <span> {item.answer}</span>
                  </p>
                );
              })}
            </div>
            <p>{notes[counter - 1].summary}</p>
            <Link to={"/editpage/" + notes[counter - 1]._id}>
              <button>Edit Note</button>
            </Link>
            <button onClick={() => this.handleDelete(notes[counter - 1]._id)}>
              Delete Note
            </button>
            <Link to={"/createpage/" + this.props.route}>
              <button>Add Page</button>
            </Link>
            <div>
              <input
                type="text"
                onChange={this.handleChange}
                value={pageIndex}
              />
              <button onClick={this.handleCounterChange}>Go</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>There are no pages in your notebook</h2>
          <Link to={"/createpage/" + this.props.match.params.id}>
            <button>Add Page</button>
          </Link>
        </div>
      );
    }
  }
}

export default ViewNotebook;
