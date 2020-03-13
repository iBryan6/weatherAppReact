import React, { Component } from "react";
import { Header, Container, List, Segment, Popup, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class PageFavorites extends Component {
  render() {
    const { favorites } = this.props;

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
                <List.Item>
                  <Popup
                    content="Remove from favorites"
                    trigger={
                      <Button
                        icon="trash"
                        color="red"
                        size="tiny"
                        style={{ marginTop: "10px" }}
                        onClick={() => {}}
                      />
                    }
                  />
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
    favorites: state.favorites
  };
};

export default connect(mapStateToProps)(PageFavorites);
