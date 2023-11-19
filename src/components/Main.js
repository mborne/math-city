import React from 'react';


import {
  HashRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom';

import Home from './Home';
import Game from './Game';
import GithubCorner from 'react-github-corner';

/**
 * Route to the game in a given mode.
 */
function GameRoute() {
  let { mode } = useParams();

  return (
    <Game mode={mode} />
  );
}

/**
 * Application router.
 */
class Main extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/play/:mode" element={<GameRoute />}/>
        </Routes>
        <GithubCorner href="https://github.com/mborne/math-city" />
      </Router>
    );
  }

}

export default Main;
