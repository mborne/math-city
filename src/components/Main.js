import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Game from './Game';

/**
 * Page d'accueil de l'application.
 */
class Main extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addition">
            <Game mode="addition" />
          </Route>
          <Route exact path="/multiplication">
            <Game mode="multiplication" />
          </Route>
          <Route exact path="/double">
            <Game mode="double" />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default Main;
