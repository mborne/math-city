import React from 'react';

/**
 * Virtual keyboard button.
 */
class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.onClick(this.props.value);
    }

    render() {
        return (
            <div className="col-4 keyboard-button user-select-none" onClick={this.handleClick.bind(this)}>
                <span className="keyboard-button-value">{this.props.value}</span>
            </div>
        )
    }

}

export default Button;
