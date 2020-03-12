import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export class SearchCity extends Component {

  constructor() {
    super();
    this.state = {
      city: "",
      temperature: 0,
      humity: 0
    };
    this.getWeather = this.getWeather.bind(this);
  }

  textHandler = e => {
    this.setState({ city: e.target.value });
  }

  getWeather() {
    let city = this.state.city
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.props.weatherAPI}`
      )
      .then(res => {
        console.log(res.data.main);
        this.setState({
          temperature: res.data.main.temp,
          humity: res.data.main.humidity
        });
      });

  }

  render() {
    return (
      <Form>
        <Form.Input
          label="LOOK FOR YOUR CITY'S WEATHER HERE:"
          type="text"
          placeholder="Find your city..."
          onChange={this.textHandler}
        />
        <Button onClick={this.getWeather}>Submit</Button>
      </Form>
    );
  }
}

export default SearchCity;
