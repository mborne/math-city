import React from 'react';

/**
 * Display answers.
 */
class Answers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let answers = this.props.answers;
        // TODO options
        answers = answers.reverse().slice(0,2);

        const items = [];

        for (const [index, answer] of answers.entries()) {
            if (answer.correct) {
                items.push(<div className="answer answer-valid" key={index}>{answer.message}</div>);
            } else {
                items.push(<div className="answer answer-invalid" key={index}>{answer.message}</div>);
            }
        }

        return (
            <div className="answers">
                {items}
            </div>
        )
    }

}

export default Answers;
