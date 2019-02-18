// Notepage Display Code

import React from "react";
import { Link } from "react-router-dom";

class NotepageDisplay extends React.Component {
  state = {
    counter: 1,
    pageIndex: 1
  };

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

  handleDelete = () => {};

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    let notesLength = this.props.notes.length;
    let content = this.props.notes;
    let { counter, pageIndex } = this.state;
    let index = counter - 1;
    return (
      <div>
        <span>
          {counter - 1 > 0 && (
            <button onClick={this.handleDecrease}>prev</button>
          )}
          <input type="text" value={pageIndex} onChange={this.handleChange} />
          {"/" + notesLength}
          {counter < content.length && (
            <button onClick={this.handleIncrease}>next</button>
          )}
          <button onClick={this.handleCounterChange}>Go</button>
        </span>
        <h2>{this.props.notes[index].title}</h2>
        <div>
          {content[index].questionAnswer.map((item, id) => {
            return (
              <p key={id}>
                <span>{item.question} </span>
                <span> {item.answer}</span>
              </p>
            );
          })}
        </div>
        <p>{content[index].summary}</p>
        <Link to={"/editpage/" + content[index]._id}>
          <button>Edit Note</button>
        </Link>
        <button onClick={this.handleDelete}>Delete Note</button>
        <Link to={"/createpage/" + this.props.route}>
          <button>Add Page</button>
        </Link>
      </div>
    );
  }
}

export default NotepageDisplay;
