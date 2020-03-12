import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageCitySearch from "./components/PageCitySearch/PageCitySearch";
import PageFavorites from "./components/PageFavorites/PageFavorites";
import TopMenu from "./components/TopMenu/TopMenu";

const REACT_APP_WEATHER_API_KEY = "91fae767180ad7427d046a4082c31887";
export class App extends Component {
  render() {
    return (
      <Router>
        <TopMenu />
        <Container style={{ marginTop: "50px" }}>
          <Switch>
            <Route
              exact
              path={["/"]}
              component={() => (
                <PageCitySearch weatherApiKey={REACT_APP_WEATHER_API_KEY} />
              )}
            />
            <Route exact path={["/favorites"]} component={PageFavorites} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
