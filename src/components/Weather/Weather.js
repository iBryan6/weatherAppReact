import React from "react";
import { Segment, Button, Icon, Header, Popup } from "semantic-ui-react";

const Weather = props => (
  <div>
    {props.temperature && props.humidity && (
      <Segment style={{ marginTop: "40px" }}>
        <Header sub>WEATHER RESULTS:</Header>
        <br />
        
        {/* SHOW ALL */}
        {props.temperature && props.humidity && props.info === "all" && (
          <div>
            <p>
              <Icon name="cloud" size="large" /> Temperature: {props.fahrenheit}
            </p>
            <p>
              <Icon name="shower" size="large" /> Humidity: {props.humidity}
            </p>
          </div>
        )}

        {/* SHOW JUST TEMP*/}
        {props.temperature && props.humidity && props.info === "temp" && (
          <div>
            <p>
              <Icon name="cloud" size="large" /> Temperature: {props.fahrenheit}
            </p>
          </div>
        )}

        {/* SHOW JUST HUM*/}
        {props.temperature && props.humidity && props.info === "hum" && (
          <div>
            <p>
              <Icon name="shower" size="large" /> Humidity: {props.humidity}
            </p>
          </div>
        )}

        <Popup content='Add this city to your favorites' trigger={<Button icon='star' color="yellow" style={{ marginTop: "20px" }}/>} />
      </Segment>
    )}
  </div>
);

export default Weather;
