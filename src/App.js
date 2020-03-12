import React, { Component } from "react";
import { Header, Grid } from "semantic-ui-react";
import SearchCity from "./components/SearchCity/SearchCity";
import Weather from "./components/Weather/Weather";

const REACT_APP_WEATHER_API_KEY = "91fae767180ad7427d046a4082c31887";
export class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid.Column>
          <Header as="h1" content="OKTANA WEATHER APP" textAlign="center" />
          <SearchCity weatherAPI={REACT_APP_WEATHER_API_KEY} />
          <Weather />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
