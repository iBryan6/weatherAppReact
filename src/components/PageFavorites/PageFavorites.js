import React, { Component } from "react";
import { Header, Container } from "semantic-ui-react";
import { connect } from "react-redux";


class PageFavorites extends Component{
  render(){
    const {favorites} = this.props;
    console.log(favorites);
    return (
      <Container>
        <Header as="h1" content="FAVORITES" textAlign="center"/>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(PageFavorites);
