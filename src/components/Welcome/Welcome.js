import React, { Component } from "react";
import "./Welcome.css";

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcome-text">
        <span id="title-line">Welcome to MOVIE PLEASE</span>
        <span id="description-line">
          MOVIE PLEASE is a web app that can help you find the next movie to watch.
        </span>
        <span id="enjoy">enjoy!</span>
      </div>
    );
  }
}
