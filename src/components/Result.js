import React from 'react';

import {
    Link
} from 'react-router-dom';

/**
 * Affichage des résultats.
 */
class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const answers = this.props.answers;

        let countCorrectAnswers = 0;
        for ( const answer of answers ){
            if ( answer.correct ){
                countCorrectAnswers++;
            }
        }

        return (
            <div className="result">
                <h1>Résultat</h1>
                <h2>Score : {countCorrectAnswers} / {answers.length}</h2>
                <Link to="/">Nouvelle partie</Link>
            </div>
        );
    }

}

export default Result;
