
class Chrono {

    constructor(targetElement){
        this.targetElement = targetElement;
        this.start = new Date();
        window.requestAnimationFrame(this.render.bind(this));
    }

    render(){
        var now  = new Date();
        var milliseconds = now.getTime() - this.start.getTime();
        var seconds = (milliseconds / 1000.0).toFixed(1);
        this.targetElement.innerHTML = `${seconds}s`;
        window.requestAnimationFrame(this.render.bind(this));
    }

}

