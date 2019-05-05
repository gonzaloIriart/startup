class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
    }

    play(){ 
        super.on('play',()=>{
            console.log(this.name + ' is playing...')
        })
            
        }

    pause(){
        console.log('movie is paused')
    }

    resume(){
        super.emit('play');
    }
}