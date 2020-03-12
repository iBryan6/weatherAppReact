import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";
import SearchCity from "./components/SearchCity/SearchCity";
import Weather from "./components/Weather/Weather";
import axios from "axios";

const REACT_APP_WEATHER_API_KEY = "91fae767180ad7427d046a4082c31887";
export class App extends Component {
  state = {
    city: "",
    temperature: undefined,
    humidity: undefined
  };

  textHandler = e => {
    this.setState({ city: e.target.value });
  };
  getWeather = () => {
    let city = this.state.city;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`
      )
      .then(res => {
        this.setState({
          temperature: res.data.main.temp,
          humidity: `${res.data.main.humidity}%`
        });
      })
      .catch(err => {
        alert("Please enter a valid city");
      });
  };
  render() {
    return (
      <Segment>
        <Header as="h1" content="OKTANA WEATHER APP" textAlign="center" />
        <SearchCity
          getWeather={this.getWeather}
          textHandler={this.textHandler}
        />
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
        />
      </Segment>
    );
  }
}

export default App;
