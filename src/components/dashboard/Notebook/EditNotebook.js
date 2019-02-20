import React from "react";
import axios from "axios";

class EditNotebook extends React.Component {
  state = {
    title: ""
  };

  input = React.createRef();

  componentDidMount() {
    axios
      .get("http://localhost:3001/notebook/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title
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

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      title: this.state.title
    };
    axios
      .post(
        "http://localhost:3001/notebook/" + this.props.match.params.id,
        data
      )
      .then(res => console.log(res.data));

    this.props.history.push("/dashboard");
  };

  render() {
    let { title } = this.state;
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
      </div>
    );
  }
}

export default EditNotebook;
