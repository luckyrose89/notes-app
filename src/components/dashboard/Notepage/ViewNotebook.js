import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ViewNotebook extends React.Component {
  state = {
    pageCount: false,
    notes: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/notebook/" + this.props.match.params.id)
      .then(response => {
        let notes = response.data.notes;
        if (notes.length > 0) {
          this.setState({
            pageCount: true,
            notes: notes
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let { notes, pageCount } = this.state;
    if (pageCount === true) {
      return (
        <div>
          <h1>This is where you see the notepages</h1>
          <button>Edit Note</button>
          <button>Delete Note</button>
          <Link to={"/createpage/" + this.props.match.params.id}>
            <button>Add Page</button>
          </Link>
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
