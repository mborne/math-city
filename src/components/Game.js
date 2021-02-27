import React from 'react';

import Keyboard from './Keyboard';
import Answers from './Answers';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.createQuestion(),
            answers: []
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
            answers: newAnswers
        });
    }

    render() {
        return (
            <div className="game container container-fluid">
                <h1>Multiplication</h1>
                <div className="question">{this.state.question.text}</div>
                <Keyboard onSubmit={this.handleSubmit.bind(this)} />
                <div className="row">
                    <div className="col-6 score">Score : {this.getCorrectAnswersCount()} / {this.getAnswersCount()}</div>
                    <div className="col-6 chrono">Chrono</div>
                </div>
                <Answers answers={this.state.answers} />
            </div>
        )
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
     * Création d'une nouvelles questions
     */
    createQuestion(){
        let number1 = getRandomInt(1,10);
        let number2 = getRandomInt(1,10);
        return {
            text: `${number1} x ${number2} = ?`,
            expected: number1 * number2
        }
    }
}

export default Game;
