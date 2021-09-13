import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./Movie.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);

    // Bind the class method that update state.
    this.handleClick = this.handleClick.bind(this);

    this.state = { imdbID: this.props.imdbID };
  }

  // On movie clicked
  handleClick(event) {
    // Update SearchResules component that we picked a movie.
    this.props.setID(this.state.imdbID);
  }

  render() {
    // If we have no props passed, stop.
    if (!this.props) return;

    return (
      <Link to="/movie" className="movie" id={this.key} onClick={this.handleClick}>
        <Col xs={6} md={4}>
          <img className="poster" src={this.props.poster} alt=""></img>
        </Col>
        <p className="title">{this.props.title}</p>
      </Link>
    );
  }
}
