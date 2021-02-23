
class Clavier {

    constructor(parentElement){
        let grid = document.createElement('div');
        grid.className = 'clavier';

        grid.appendChild(this.createButton('C'));
        grid.appendChild(this.createButton(''));
        grid.appendChild(this.createButton('<'));
        grid.appendChild(document.createElement('br'));
        grid.appendChild(this.createButton('7'));
        grid.appendChild(this.createButton('8'));
        grid.appendChild(this.createButton('9'));
        grid.appendChild(document.createElement('br'));
        grid.appendChild(this.createButton('4'));
        grid.appendChild(this.createButton('5'));
        grid.appendChild(this.createButton('6'));
        grid.appendChild(document.createElement('br'));
        grid.appendChild(this.createButton('1'));
        grid.appendChild(this.createButton('2'));
        grid.appendChild(this.createButton('3'));
        grid.appendChild(document.createElement('br'));
        grid.appendChild(this.createButton(','));
        grid.appendChild(this.createButton('0'));
        grid.appendChild(this.createButton('V'));
        parentElement.appendChild(grid);

        /* valeur saisie */
        this.value = '';

        this.listeners = {
            validated: [],
            change: []
        };
    }

    createButton(value){
        let button = document.createElement('input');
        button.type = 'button';
        button.value = value;
        button.className = 'boutton-clavier';
        button.addEventListener('click',this._onClick.bind(this));
        return button;
    }

    on(name,listener){
        this.listeners[name].push(listener);
    }

    trigger(name){
        let event = {
            name: name,
            value: this.value
        };
        for ( let listener of this.listeners[name] ){
            listener(event);
        }
    }

    _onClick(e){
        let value = e.target.value;
        if ( value == 'V' ){
            this.trigger('validated');
            this.value = '';
            this.trigger('change');
        }else if ( value == '' ){

        }else if ( value == 'C' ){
            this.value = '';
            this.trigger('change');
        }else if ( value == '<' ){
            this.value = this.value.slice(0, -1);
            this.trigger('change');
        }else{
            this.value += value;
            this.trigger('change');
        }
    }

}
