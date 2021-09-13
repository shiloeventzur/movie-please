import React, { Component } from "react";
import Welcome from "../Welcome/Welcome.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Container from "react-bootstrap/Container";

export default class Home extends Component {
  /*
   * Connect between App and Searchbar components to
   * allow searchbar to update App state.
   */
  onSetMovie(movie) {
    this.props.setMovie(movie);
  }

  render() {
    return (
      <div id="body-page">
        <Container>
          <Welcome />
          <SearchBar setMovie={this.onSetMovie.bind(this)} />
        </Container>
      </div>
    );
  }
}
