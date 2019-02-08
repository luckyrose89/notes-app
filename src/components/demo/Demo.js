import React from "react";

class Demo extends React.Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleClick = () => {
    let { title } = this.state;
    if (title !== "") {
      // navigate("demo/notebook", { state: { title: title } });
    }
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
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default Demo;
