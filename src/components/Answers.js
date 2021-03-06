import React from 'react';

/**
 * Display answers.
 */
class Answers extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultProps(){
        return {
            limit: 1000,
            reverse: false
        };
    }

    render() {
        let answers = this.props.answers;
        if ( this.props.reverse ){
            answers = answers.reverse();
        }
        if ( this.props.limit != null ){
            answers = answers.slice(0,this.props.limit);
        }

        const items = [];
        for (const [index, answer] of answers.entries()) {
            const classNames = answer.correct ? "answer answer-valid" : "answer answer-invalid";
            items.push(<div key={index} className={classNames}>{answer.message}</div>);
        }

        return (
            <div className="answers">
                {items}
            </div>
        )
    }

}

export default Answers;
