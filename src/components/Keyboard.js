import React from 'react';

import KeyboardButton from './KeyboardButton';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleKey(key){
        this.setState({
            value: this.state.value+key
        });
    }

    handleRemoveOne(){
        this.setState({
            value: this.state.value.slice(0, -1)
        });
    }

    handleClear(){
        this.setState({
            value: ''
        });
    }



    handleSubmit(){
        let value = this.state.value;
        if ( value == '' ){
            return;
        }
        this.props.onSubmit(value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="keyboard">
                <div className="keyboard-input">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Réponse" value={this.state.value} disabled />
                        </div>
                    </form>
                </div>
                <div className="keyboard-buttons">
                    <div className="row">
                        <KeyboardButton value="C" onClick={this.handleClear.bind(this)} />
                        <KeyboardButton value="" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="<" onClick={this.handleRemoveOne.bind(this)} />
                    </div>
                    <div className="row">
                        <KeyboardButton value="7" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="8" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="9" onClick={this.handleKey.bind(this)} />
                    </div>
                    <div className="row">
                        <KeyboardButton value="4" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="5" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="6" onClick={this.handleKey.bind(this)} />
                    </div>
                    <div className="row">
                        <KeyboardButton value="1" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="2" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="3" onClick={this.handleKey.bind(this)} />
                    </div>
                    <div className="row">
                        <KeyboardButton value="." onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="0" onClick={this.handleKey.bind(this)} />
                        <KeyboardButton value="V" onClick={this.handleSubmit.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Keyboard;
