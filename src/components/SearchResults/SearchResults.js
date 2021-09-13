import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Movie from "../Movie/Movie.js";
import "./SearchResults.css";

export default class SearchResules extends Component {
  constructor(props) {
    super(props);
    this.getMoviesJson = this.getMoviesJson.bind(this);
    this.state = {
      data: undefined,
    };
  }

  // Fetch movies from API
  async getMoviesJson() {
    if (this.props.movie) {
      let url = `http://www.omdbapi.com/?apikey=c212221&s=${this.props.movie}`;
      const response = await axios(url);
      await this.setState({ data: response.data });
    } else {
      this.setState({ data: "error" });
    }
  }

  // connect between Moive and App components. (let App know that movie the user picked)
  onSetID(ID) {
    this.props.setID(ID);
  }

  render() {
    if (!this.state.data) {
      this.getMoviesJson();
      return (
        <div className="spinner">
          <Spinner id="loading-weather" animation="border" variant="light" />
        </div>
      );
    }

    // if the page is refreshed the props become undefined, so show error.
    // If the server returns not found, present it to the user.
    if (this.state.data.Error === "Movie not found!" || this.state.data === "error") {
      return <h1 id="search-results-title">Sorry! You didn't find your movie</h1>;
    }

    return (
      <div>
        <h1 id="search-results-title">Search Results for: "{this.props.movie}"</h1>
        <div id="movies">
          {this.state.data.Search.map((movie) => {
            return (
              <Movie
                title={movie.Title}
                poster={movie.Poster}
                key={movie.imdbID}
                imdbID={movie.imdbID}
                setID={this.onSetID.bind(this)}
              ></Movie>
            );
          })}
        </div>
      </div>
    );
  }
}
