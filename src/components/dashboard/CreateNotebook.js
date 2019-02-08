import React from "react";

class CreateNotebook extends React.Component {
  state = {
    title: ""
  };
  render() {
    return (
      <div>
        <p>This is where you create a notebook</p>
        <form>
          <label htmlFor="notebookTitle">Notebook Title:</label>
          <input id="bookTitle" />
        </form>
      </div>
    );
  }
}

export default CreateNotebook;
