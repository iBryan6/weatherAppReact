import React, { Component } from "react";
import { Segment, Button, Icon, Header } from "semantic-ui-react";

export class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.temperature && this.props.humidity && (
          <Segment style={{ marginTop: "40px" }}>
            <Header sub>WEATHER RESULTS:</Header>
            <br/>
            <p>Temperature: {this.props.temperature}</p>
            <p>Humidity: {this.props.humidity}</p>
            <Button icon labelPosition="left" color="yellow">
              <Icon name="star"  />
              Set as favorite
            </Button>
          </Segment>
        )}
      </div>
    );
  }
}

export default Weather;
