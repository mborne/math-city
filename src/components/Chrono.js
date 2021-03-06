import React from 'react';

/**
 * Display ellapsed time in seconds.
 */
class Chrono extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            date: new Date()
        };
    }

    componentDidMount() {
        ;
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            startDate: this.state.startDate,
            date: new Date()
        });
    }

    render() {
        var milliseconds = this.state.date.getTime() - this.state.startDate.getTime();
        var seconds = (milliseconds / 1000.0).toFixed(0);
        return (
            <span>{seconds}s</span>
        );
    }
}

export default Chrono;
