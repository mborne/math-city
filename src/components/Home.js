import React from 'react';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import modes from '../modes';
import getModeTitle from '../helpers/getModeTitle';

/**
 * Home page providing main menu.
 */
class Home extends React.Component {
    render() {
        let modeItems = [];
        Object.keys(modes).map(function(modeName,index){
            let modeTitle = getModeTitle(modeName);
            let modeLink = `/play/${modeName}`;
            let modeItem = (<li key={index} className="list-group-item">
                <Link to={modeLink}>{modeTitle}</Link>
            </li>);
            modeItems.push(modeItem);
        });
        return (
            <div class="home">
                <h1>MathCity</h1>
                <ul className="list-group">
                    {modeItems}
                </ul>
            </div>
        )
    }

}

export default Home;
