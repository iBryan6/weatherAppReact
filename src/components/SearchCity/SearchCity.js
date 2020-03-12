import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";


export class SearchCity extends Component {

  render() {
    return (
      <Form onSubmit={this.props.getWeather}>
        <Form.Input
          label="LOOK FOR YOUR CITY'S WEATHER HERE:"
          type="text"
          placeholder="Find your city..."
          onChange={this.props.textHandler}
        />
        <Button type="submit" positive>Search</Button>
      </Form>
    );
  }
}

export default SearchCity;
