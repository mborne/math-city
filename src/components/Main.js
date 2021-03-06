import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import Home from './Home';
import Game from './Game';


function GameRoute() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { mode } = useParams();

  return (
    <Game mode={mode} />
  );
}

/**
 * Page d'accueil de l'application.
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
