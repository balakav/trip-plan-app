import React, { Component } from "react";
import axios from "axios";

class DeleteBus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  searchBook = () => {
    axios
      .delete("http://localhost:8082/api/v1/user/deletebus" + this.state.search)
      .then(() => alert("Deleted id: " + this.state.search))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
          <h2>Cancel the ticket</h2>
          <div>
            <input
              type="text"
              placeholder="enter"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button onClick={this.searchBook}>Enter</button>
          </div>
        </div>
      </>
    );
  }
}

export default DeleteBus;
