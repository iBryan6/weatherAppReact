import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

export class Weather extends Component {
  render() {
    return (
      <Segment>
        <p>Temperature: Celcius o Feranhait</p>
        <p>Humidity: </p>
        <Button>Save to Favorites</Button>
      </Segment>
    );
  }
}

export default Weather;
