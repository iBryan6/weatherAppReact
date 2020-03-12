import React from "react";
import { Segment, Button, Icon, Header } from "semantic-ui-react";

const Weather = props => (
  <div>
    {props.temperature && props.humidity && props.info === "all" && (
      <Segment style={{ marginTop: "40px" }}>
        <Header sub>WEATHER RESULTS:</Header>
        <br />
        <p>Temperature: {props.temperature}</p>
        <p>Humidity: {props.humidity}</p>
        <Button icon labelPosition="left" color="yellow">
          <Icon name="star" />
          Set as favorite
        </Button>
      </Segment>
    )}

    {props.temperature && props.humidity && props.info === "temp" && (
      <Segment style={{ marginTop: "40px" }}>
        <Header sub>WEATHER RESULTS:</Header>
        <br />
        <p>Temperature: {props.temperature}</p>
        <Button icon labelPosition="left" color="yellow">
          <Icon name="star" />
          Set as favorite
        </Button>
      </Segment>
    )}
    {props.temperature && props.humidity && props.info === "hum" && (
      <Segment style={{ marginTop: "40px" }}>
        <Header sub>WEATHER RESULTS:</Header>
        <br />
        <p>Humidity: {props.humidity}</p>
        <Button icon labelPosition="left" color="yellow">
          <Icon name="star" />
          Set as favorite
        </Button>
      </Segment>
    )}
  </div>
);

export default Weather;
