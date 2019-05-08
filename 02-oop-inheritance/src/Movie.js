class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play(){ 
        super.emit('play');
        }

    pause(){
        super.emit('pause');
        }

    resume(){
        super.emit('resume');
        }

    addCast(cast){
        if(Array.isArray(cast)){
            cast.forEach(actor => this.cast.push(actor));
        }else{
            this.cast.push(cast);
        }        
    }
}