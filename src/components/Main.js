import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom';

import Home from './Home';
import Game from './Game';

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
      <Router basename="/math-city/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/play/:mode" element={<GameRoute />}/>
        </Routes>
      </Router>
    );
  }

}

export default Main;
