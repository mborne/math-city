import React from 'react';

import Numpad from './Numpad';
import Answers from './Answers';
import Result from './Result';
import Chrono from './Chrono';

import modes from '../modes';
import getModeTitle from '../helpers/getModeTitle';

const NUMBER_OF_QUESTIONS = 20;

/**
 * Play the game in a given mode.
 */
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.createQuestion(),
            answers: [],
            startDate: new Date()
        }
    }

    handleSubmit(value){
        if ( value == '' ){
            return;
        }
        let correct = ( value == this.state.question.expected );
        let message = this.state.question.text.replace(/\?/gi, value);
        if ( ! correct ){
            message = message.replace(/=/gi,'!=');
        }
        let newAnswers = this.state.answers;
        newAnswers.push({
            correct: correct,
            message: message,
            expected: this.state.question.expected
        });
        this.setState({
            question: this.createQuestion(),
            answers: newAnswers,
            startDate: this.state.startDate
        });
    }

    render() {
        const mode = this.props.mode;
        const title = getModeTitle(mode);

        /*
         * Gestion de la fin de la partie
         */
        const complete = this.getAnswersCount() == NUMBER_OF_QUESTIONS;
        if ( complete ){
            const endDate = new Date();
            return (
                <Result mode={this.props.mode} startDate={this.state.startDate} endDate={endDate} answers={this.state.answers} />
            )
        }else{
            return (
                <div className="game">
                    <h1>{title}</h1>
                    <div className="question">{this.state.question.text}</div>
                    <Numpad onSubmit={this.handleSubmit.bind(this)} />
                    <div className="row">
                        <div className="col-6 score">Score : {this.getCorrectAnswersCount()} / {this.getAnswersCount()}</div>
                        <div className="col-6 chrono">
                            <Chrono />
                        </div>
                    </div>
                    <Answers reverse="true" limit="2" answers={this.state.answers} />
                </div>
            )
        }
    }

    /**
     * Renvoie le nombre de réponse
     */
    getAnswersCount(){
        return this.state.answers.length;
    }

    /**
     * Renvoie le nombre de réponse
     */
    getCorrectAnswersCount(){
        let result = 0;
        for ( const answer of this.state.answers ){
            result += answer.correct ? 1 : 0;
        }
        return result;
    }

    /**
     * Renvoie la dernière réponse
     */
    getLastAnswer(){
        if ( this.answers.length == 0 ){
            return null;
        }else{
            this.answers[0];
        }
    }

    /**
     * Création d'une nouvelle question en fonction du mode
     */
    createQuestion(){
        return modes[this.props.mode]();
    }

}

export default Game;
