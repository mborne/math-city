import React from 'react';

import {
  HashRouter as Router,
  Switch,
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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/play/:mode" children={<GameRoute />}/>
        </Switch>
      </Router>
    );
  }

}

export default Main;
