import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchbar: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Onchange search input
  handleChange(event) {
    this.setState({ searchbar: event.target.value });
  }

  // Onclick seach button
  handleClick(event) {
    event.preventDefault();
    this.props.setMovie(this.state.searchbar);

    // Check input
    if (this.state.searchbar && this.state.searchbar.length >= 3)
      document.getElementById("clickLink").click();
  }

  render() {
    return (
      <Form className="d-flex" id="searchbar-form">
        <input
          className="form-control me-2 rounded-pill w-50"
          onChange={this.handleChange}
          type="search"
          placeholder="Enter at least three letters "
          aria-label="Search"
        />

        <Button
          className="btn btn-primary rounded-pill btn"
          onClick={this.handleClick}
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </Button>
        <Link to="/search-results" id="clickLink"></Link>
      </Form>
    );
  }
}
