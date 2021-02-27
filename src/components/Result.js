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
        const mode = this.props.mode;
        const title = mode.charAt(0).toUpperCase() + mode.slice(1);

        const answers = this.props.answers;
        let countCorrectAnswers = 0;
        for ( const answer of answers ){
            if ( answer.correct ){
                countCorrectAnswers++;
            }
        }

        var milliseconds = this.props.endDate.getTime() - this.props.startDate.getTime();
        var seconds = (milliseconds / 1000.0).toFixed(0);

        return (
            <div className="result">
                <h1>{title}</h1>

                <div className="text-center font-weight-bold">
                    Score : {countCorrectAnswers} / {answers.length} en {seconds} secondes!
                </div>

                <div className="text-center">
                    <Link to="/"><span className="btn btn-primary">Nouvelle partie</span></Link>
                </div>
            </div>
        );
    }

}

export default Result;
