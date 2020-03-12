import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

export class Weather extends Component {
  render() {
    return (
      <Segment>
        <p>Temperature: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <Button>Save to Favorites</Button>
      </Segment>
    );
  }
}

export default Weather;
