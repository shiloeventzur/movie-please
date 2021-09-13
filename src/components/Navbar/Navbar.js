import React, { Component } from "react";
import Weather from "../Weather/Weather.js";
import BootNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();

    // Set fallback location in Tel Aviv
    this.state = { lat: `32.109333`, long: `34.855499` };
    this.setLocation = this.setLocation.bind(this);
  }

  // Get geolocation and upadat state.
  setLocation(position) {
    this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
  }

  render() {
    // If we still not recived a new location. (endless call kill the browser)
    if (this.state.lat === `32.109333`) {
      // Call geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setLocation);
      }
    }

    return (
      <div>
        <BootNavbar id="navbar" expand="lg" variant="dark">
          <Container>
            <BootNavbar.Brand as={Link} to="/">
              <h1 id="navbar-title">movie please</h1>
            </BootNavbar.Brand>

            <Weather lat={this.state.lat} long={this.state.long} />
          </Container>
        </BootNavbar>
      </div>
    );
  }
}

export default Navbar;
