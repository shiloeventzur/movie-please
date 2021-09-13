import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";

import Spinner from "react-bootstrap/Spinner";
import "./Weather.css";
import ReactWeather, { useOpenWeather } from "react-open-weather";

export default function Weather(props) {
  // Set style for weather.
  const customStyles = {
    fontFamily: "Roboto , sans-serif",
    gradientStart: "#414345",
    gradientMid: "#414345",
    gradientEnd: "#232526",
    locationFontColor: "aliceblue",
    todayTempFontColor: "aliceblue",
    todayDateFontColor: "aliceblue",
    todayRangeFontColor: "aliceblue",
    todayDescFontColor: "aliceblue",
    todayInfoFontColor: "aliceblue",
    todayIconColor: "aliceblue",
    forecastBackgroundColor: "aliceblue",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  // Get data from API
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "362be1f28803994ce40d05880a5f25ac",
    lat: props.lat,
    lon: props.long,
    lang: "en",
    unit: "metric",
  });

  // Set spinner if the data still not arrived.
  let weatherBrief = <Spinner id="loading-weather" animation="border" variant="light" />;
  if (data) {
    // If he did, put all the weather data in weatherbrief
    weatherBrief = (
      <div onClick={toggleShowA} className="weather-brief">
        <p id="temperature">{data.current.temperature.current}°</p>
        <p id="description">{data.current.description}</p>
      </div>
    );
  }

  return (
    <Col md={6} className="mb-2 weather-holder">
      {weatherBrief} {/* Render brif */}
      {/* Put the complete data in a Bootstap Toast component */}
      <Toast style={{ position: "absolute", zIndex: 1 }} show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="me-auto">Weather</strong>
        </Toast.Header>
        <Toast.Body>
          <ReactWeather
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
            showForecast={false}
          />
        </Toast.Body>
      </Toast>
    </Col>
  );
}
