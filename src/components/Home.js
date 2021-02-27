import React from 'react';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

/**
 * Page d'accueil de l'application.
 */
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Math Kombat!</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/addition">Addition</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/multiplication">Multiplication</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/double">Double</Link>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Home;
