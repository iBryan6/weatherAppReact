import React from "react";
import { Form, Button, Radio } from "semantic-ui-react";

const SearchCity = props => (
  <Form onSubmit={props.getWeather}>
    <Form.Input
      label="LOOK FOR YOUR CITY'S WEATHER HERE:"
      type="text"
      placeholder="Find your city..."
      onChange={props.textHandler}
    />
    <Form.Field>
      <Radio
        label="Show all Information"
        name="radioGroup"
        value="all"
        checked={props.info === "all"}
        onChange={props.infoHandler}
      />
    </Form.Field>
    <Form.Field>
      <Radio
        label="Show just Temperature"
        name="radioGroup"
        value="temp"
        checked={props.info === "temp"}
        onChange={props.infoHandler}
      />
    </Form.Field>
    <Form.Field>
      <Radio
        label="Show just Humidity"
        name="radioGroup"
        value="hum"
        checked={props.info === "hum"}
        onChange={props.infoHandler}
      />
    </Form.Field>
    <Button type="submit" positive>
      Search
    </Button>
  </Form>
);

export default SearchCity;
