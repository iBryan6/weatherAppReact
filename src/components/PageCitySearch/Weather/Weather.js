import React, { Component } from "react";
import {
  Segment,
  Button,
  Icon,
  Header,
  Popup,
  Checkbox
} from "semantic-ui-react";
import { connect } from "react-redux";

class Weather extends Component {
  handleClick = city => {
    this.props.addCity(city);
  };

  render() {
    let temp = "";
    let weatherObj = {
      city: this.props.city,
      tempC: this.props.celsius,
      tempF: this.props.fahrenheit,
      hum: this.props.humidity
    };
    this.props.tempBool === true
      ? (temp = this.props.fahrenheit)
      : (temp = this.props.celsius);
    return (
      <div>
        {this.props.tempKelvin && this.props.humidity && (
          <Segment style={{ marginTop: "40px" }}>
            <Header sub>WEATHER RESULTS:</Header>
            <br />

            {/* SHOW ALL */}
            {this.props.tempKelvin &&
              this.props.humidity &&
              this.props.info === "all" && (
                <div>
                  <div style={{ marginBottom: "20px" }}>
                    °C{" "}
                    <Checkbox
                      slider
                      checked={this.props.tempBool}
                      onChange={this.props.tempHandler}
                    />{" "}
                    °F
                  </div>
                  <p>
                    <Icon name="cloud" size="large" /> Temperature:{temp}
                  </p>
                  <p>
                    <Icon name="shower" size="large" /> Humidity:{" "}
                    {this.props.humidity}
                  </p>
                </div>
              )}

            {/* SHOW JUST TEMP*/}
            {this.props.tempKelvin &&
              this.props.humidity &&
              this.props.info === "temp" && (
                <div>
                  <div style={{ marginBottom: "20px" }}>
                    °C{" "}
                    <Checkbox
                      slider
                      checked={this.props.tempBool}
                      onChange={this.props.tempHandler}
                    />{" "}
                    °F
                  </div>
                  <p>
                    <Icon name="cloud" size="large" /> Temperature:{temp}
                  </p>
                </div>
              )}

            {/* SHOW JUST HUM*/}
            {this.props.tempKelvin &&
              this.props.humidity &&
              this.props.info === "hum" && (
                <div>
                  <p>
                    <Icon name="shower" size="large" /> Humidity:{" "}
                    {this.props.humidity}
                  </p>
                </div>
              )}

            <Popup
              content="Add this city to your favorites"
              trigger={
                <Button
                  icon="star"
                  color="yellow"
                  style={{ marginTop: "20px" }}
                  onClick={() => this.handleClick(weatherObj)}
                />
              }
            />
          </Segment>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCity: city => {
      dispatch({ type: "ADD_FAVORITE", city: city });
    }
  };
};

export default connect(null, mapDispatchToProps)(Weather);
