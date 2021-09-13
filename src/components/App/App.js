import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Home from "../Home/Home.js";
import SearchResults from "../SearchResults/SearchResults.js";
import MovieDetails from "../MovieDetails/MovieDetails.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    // Bind the class methods that update state.
    this.onSetMovie = this.onSetMovie.bind(this);
    this.onSetID = this.onSetID.bind(this);

    this.state = {
      moviePicked: undefined,
      IDPicked: undefined,
    };
  }

  // When the user clicked to search a movie.
  onSetMovie(movie) {
    // Upadte state what movie the user picked.
    this.setState({ moviePicked: movie });
  }

  // When the user selected a movie from the list.
  onSetID(ID) {
    // Upadte state what movie the user picked.
    this.setState({ IDPicked: ID });
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home setMovie={this.onSetMovie.bind(this)} /> {/* Home page */}
            </Route>
            <Route exact path="/search-results">
              <SearchResults movie={this.state.moviePicked} setID={this.onSetID.bind(this)} />{" "}
              {/* Search results page */}
            </Route>
            <Route exact path="/movie">
              <MovieDetails movieID={this.state.IDPicked} /> {/* Specific movie details page */}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
