import React from "react";
import { Link } from "react-router-dom";

class Demo extends React.Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div>
        <p>Create new Notebook</p>
        <form>
          <label htmlFor="notebook-name">Enter Notebook Subject:</label>
          <input
            id="notebook-name"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />
        </form>
        {title !== "" && (
          <Link
            to={{
              pathname: "/notebook",
              state: {
                bookName: title
              }
            }}
          >
            Save
          </Link>
        )}
      </div>
    );
  }
}

export default Demo;
