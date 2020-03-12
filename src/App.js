import React, { Component } from "react";
import PageCitySearch from "./components/PageCitySearch/PageCitySearch";
import PageFavorites from "./components/PageFavorites/PageFavorites";


const REACT_APP_WEATHER_API_KEY = "91fae767180ad7427d046a4082c31887";
export class App extends Component {
  render() {
    return (
      <div>
      <PageCitySearch weatherApiKey={REACT_APP_WEATHER_API_KEY}/>
      
      </div>
    );
  }
}

export default App;
