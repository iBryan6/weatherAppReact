import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SearchCity = props => {
  return (
    <Menu inverted fixed="top">
      <Menu.Menu>
        <Menu.Item as={Link} to="/">
          <Icon name="computer" />
          Search by City
        </Menu.Item>
        <Menu.Item as={Link} to="/favorites">
          <Icon name="star" />
          Favorites
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default SearchCity;
