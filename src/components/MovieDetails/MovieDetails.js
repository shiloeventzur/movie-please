import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "./MovieDetails.css";

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.getMovie = this.getMovie.bind(this);
    this.state = { data: undefined, poster: undefined };
  }

  // Get full details of the movie we picked.
  async getMovie() {
    if (this.props.movieID) {
      let url = `http://www.omdbapi.com/?apikey=c212221&i=${this.props.movieID}`;
      const response = await axios(url);
      await this.setState({ data: response.data });
    } else {
      this.setState({ data: "error" });
    }
  }

  render() {
    // We recived data from the API?
    if (!this.state.data) {
      // Get data, until then, render loading spinner.
      this.getMovie();
      return (
        <div className="spinner">
          <Spinner id="loading-weather" animation="border" variant="light" />
        </div>
      );
    }

    // if the page is refreshed the props become undefined, so show error.
    if (this.state.data === "error") {
      return <h1 id="search-results-title">Sorry! You didn't find your movie</h1>;
    }

    return (
      // Split to divs for CSS flexbox
      <div className="movie-details">
        <div className="poster-rank">
          <img className="poster-details" src={this.state.data.Poster} alt=""></img>
          <p className="rank">iMDb Rank: {this.state.data.imdbRating}/10</p>
        </div>
        <div className="title-year-genre-plot">
          <p className="title-details">{this.state.data.Title}</p>
          <div className="year-genre">
            <p className="year-details">{this.state.data.Year}</p>
            <p className="genre-details">{this.state.data.Genre}</p>
          </div>
          <p className="plot">{this.state.data.Plot}</p>
        </div>
      </div>
    );
  }
}
