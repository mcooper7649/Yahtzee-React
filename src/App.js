import React, { Component } from "react";
import Game from "./Game";
import "./App.css";
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Helmet>
      <meta charset="utf-8" />
          <meta name="title" property="og:title" content="Yahtzee!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="https://i.ibb.co/fM8m6tj/yahtzee-image.png" />
          <meta name="url" property="og:url" content="" />
          <meta name="description" property="Classic Yahtzee built with React | Your favorite childhood game is back and onine. Play solo and try to set the highscore! Rules are available, for noobs." />
          <meta name="author" property="og:author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-21T00:00:00-0600" />
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <title>LightsOut</title>
      </Helmet>
        <Game />
      </div>
    );
  }
}

export default App;
