import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import SearchCity from "./components/SearchCity/SearchCity";
import Weather from "./components/Weather/Weather";
import axios from "axios";

const REACT_APP_WEATHER_API_KEY = "91fae767180ad7427d046a4082c31887";
export class App extends Component {
  state = {
    city: "",
    tempKelvin: undefined,
    humidity: undefined,
    information: "all",
    celsius: undefined,
    fahrenheit: undefined,
    tempBool: false
  };

  //HANDLE FOR RADIO BUTTON [INFO/TEMP/HUM]
  infoHandler = (e, { value }) => this.setState({ information: value });
  //HANDLE FOR RADIO BUTTON [°C/°F]
  tempHandler = () => {
    this.setState({
      tempBool: !this.state.tempBool
    });
  };

  //HANDLE TEXT CHANGE ON THE INPUT
  textHandler = e => {
    this.setState({ city: e.target.value });
  };

  //GET WEATHER API OBJECT WITH AXIOS
  getWeather = () => {
    let city = this.state.city;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`
      )
      .then(res => {
        console.log(res.data.main);
        let newCelsius = `${(Math.round(res.data.main.temp - 273.15) * 100) /
          100} °C`;
        let newFahrenheit = `${(Math.round(
          (res.data.main.temp - 273.15) * 1.8 + 32
        ) *
          100) /
          100} °F`;
        this.setState({
          tempKelvin: res.data.main.temp,
          humidity: `${res.data.main.humidity} %`,
          celsius: newCelsius,
          fahrenheit: newFahrenheit
        });
      })
      .catch(err => {
        alert("Please enter a valid city");
      });
  };

  render() {
    return (
      <Container>
        <Header as="h1" content="OKTANA WEATHER APP" textAlign="center" />
        <SearchCity
          getWeather={this.getWeather}
          textHandler={this.textHandler}
          infoHandler={this.infoHandler}
          info={this.state.information}
        />
        <Weather
          city={this.state.city}
          tempKelvin={this.state.tempKelvin}
          humidity={this.state.humidity}
          info={this.state.information}
          celsius={this.state.celsius}
          fahrenheit={this.state.fahrenheit}
          tempBool={this.state.tempBool}
          tempHandler={this.tempHandler}
        />
      </Container>
    );
  }
}

export default App;
