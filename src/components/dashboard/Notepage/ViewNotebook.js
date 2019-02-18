// View First Page of Notebbok

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NotepageDisplay from "./NotepageDisplay";

class ViewNotebook extends React.Component {
  state = {
    notes: [],
    loading: true
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
  render() {
    let { notes, loading } = this.state;
    if (loading === true) {
      return <div>Loading...</div>;
    }
    if (notes.length > 0) {
      return (
        <div>
          <NotepageDisplay notes={notes} route={this.props.match.params.id} />
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
