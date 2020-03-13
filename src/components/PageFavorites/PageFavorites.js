import React, { Component } from "react";
import { Header, Container, List, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class PageFavorites extends Component {
  render() {
    const { favorites } = this.props;
    console.log(favorites);
    return (
      <Container>
        <Header as="h1" content="FAVORITES" textAlign="center" />
        {favorites.map(fav => {
          return (
            <Segment key={fav.id}>
              <List>
                <List.Item>
                  <Header sub content="WEATHER" />
                </List.Item>
                <List.Item>
                  <List.Icon name="marker" />
                  <List.Content>{fav.city}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="cloud" />
                  <List.Content>
                    {fav.tempC} / {fav.tempF}
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="shower" />
                  <List.Content>{fav.hum}</List.Content>
                </List.Item>
              </List>
            </Segment>
          );
        })}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    favorites: state.favorites.favList
  };
};

export default connect(mapStateToProps)(PageFavorites);
