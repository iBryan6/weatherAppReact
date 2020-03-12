import React from "react";
import {
  Segment,
  Button,
  Icon,
  Header,
  Popup,
  Checkbox
} from "semantic-ui-react";

const Weather = props => {
  let temp = "";
  props.tempBool === true ? (temp = props.fahrenheit) : (temp = props.celsius);
  return (
    <div>
      {props.tempKelvin && props.humidity && (
        <Segment style={{ marginTop: "40px" }}>
          <Header sub>WEATHER RESULTS:</Header>
          <br />

          {/* SHOW ALL */}
          {props.tempKelvin && props.humidity && props.info === "all" && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                °C <Checkbox slider checked={props.tempBool} onChange={props.tempHandler} /> °F
              </div>
              <p>
                <Icon name="cloud" size="large" /> Temperature:{temp}
              </p>
              <p>
                <Icon name="shower" size="large" /> Humidity: {props.humidity}
              </p>
            </div>
          )}

          {/* SHOW JUST TEMP*/}
          {props.tempKelvin && props.humidity && props.info === "temp" && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                °C <Checkbox slider checked={props.tempBool} onChange={props.tempHandler} /> °F
              </div>
              <p>
                <Icon name="cloud" size="large" /> Temperature:{temp}
              </p>
            </div>
          )}

          {/* SHOW JUST HUM*/}
          {props.tempKelvin && props.humidity && props.info === "hum" && (
            <div>
              <p>
                <Icon name="shower" size="large" /> Humidity: {props.humidity}
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
              />
            }
          />
        </Segment>
      )}
    </div>
  );
};

export default Weather;
