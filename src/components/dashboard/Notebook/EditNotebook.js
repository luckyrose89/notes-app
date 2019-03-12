import React from "react";
import { withContext } from "../../../AppContext";

class EditNotebook extends React.Component {
  state = {
    title: "",
    errorMessage: ""
  };

  componentDidMount() {
    this.props
      .getOneNotebook(this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.title
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      errorMessage: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .editOneNotebook(this.props.match.params.id, this.state)
      .then(response => {
        console.log(response);
        this.clearInputs();
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.error
        });
      });
  };

  render() {
    let { title, errorMessage } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
            <label htmlFor="notebookTitle">Notebook Title:</label>
            <input type="text" value={title} onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="Update" />
          </div>
        </form>
        {errorMessage}
      </div>
    );
  }
}

export default withContext(EditNotebook);
