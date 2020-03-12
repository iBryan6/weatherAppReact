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
    humidity: undefined,
    Information: "all"
  };

  handleChange = (e, { value }) => this.setState({ Information: value });

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
        console.log(res.data.main);
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
          handleChange={this.handleChange}
          info ={this.state.Information}
        />
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          info ={this.state.Information}
        />
      </Segment>
    );
  }
}

export default App;
