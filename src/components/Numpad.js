import React from 'react';

import Button from './Button';

/**
 * Clavier virtuel pour la saisie des réponses.
 */
class Numpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onKeyboard = this.onKeyboard.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyboard, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyboard, false);
    }

    /**
     * Gestion du clavier classique.
     *
     * @param {objet} e
     * @param {string} e.key
     */
    onKeyboard(e){
        if ( e.key == 'Enter' ){
            this.submit();
        }else if ( e.key == 'Backspace' ){
            this.removeOne();
        }else if ( e.key == 'Delete' ){
            this.clear();
        }else if ( e.key >= '0' && e.key <= '9' ){
            this.add(e.key);
        }else{
            console.log(`unexpected key '${e.key}'`);
        }
    }


    /**
     * Ajout d'un caractère.
     *
     * @param {string} key
     */
    add(key){
        this.setState({
            value: this.state.value+key
        });
    }

    /**
     * Suppression du dernier caractère.
     */
    removeOne(){
        this.setState({
            value: this.state.value.slice(0, -1)
        });
    }

    /**
     * Réinitialisation de la réponse.
     */
    clear(){
        this.setState({
            value: ''
        });
    }

    /**
     * Validation de la réponse.
     */
    submit(){
        let value = this.state.value;
        if ( value == '' ){
            return;
        }
        this.props.onSubmit(value);
        this.setState({
            value: ''
        })
    }

    /**
     * Rendu du clavier et de la réponse.
     */
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
                        <Button value="C" onClick={this.clear.bind(this)} />
                        <Button value="" onClick={this.add.bind(this)} />
                        <Button value="<" onClick={this.removeOne.bind(this)} />
                    </div>
                    <div className="row">
                        <Button value="7" onClick={this.add.bind(this)} />
                        <Button value="8" onClick={this.add.bind(this)} />
                        <Button value="9" onClick={this.add.bind(this)} />
                    </div>
                    <div className="row">
                        <Button value="4" onClick={this.add.bind(this)} />
                        <Button value="5" onClick={this.add.bind(this)} />
                        <Button value="6" onClick={this.add.bind(this)} />
                    </div>
                    <div className="row">
                        <Button value="1" onClick={this.add.bind(this)} />
                        <Button value="2" onClick={this.add.bind(this)} />
                        <Button value="3" onClick={this.add.bind(this)} />
                    </div>
                    <div className="row">
                        <Button value="." onClick={this.add.bind(this)} />
                        <Button value="0" onClick={this.add.bind(this)} />
                        <Button value="V" onClick={this.submit.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Numpad;
