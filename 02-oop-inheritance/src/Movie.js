class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
    }

    play(){ 
        if(!this.events['play']){
            super.on('play',()=>{
                console.log(this.name + ' is playing...')
            })
        }
       
        super.emit('play');
        }

    pause(){
        if(!this.events['pause']){
            super.on('pause',()=>{
                console.log(this.name + ' is in pause...')
            })
        }
       
        super.emit('pause');
        }

    resume(){
        if(!this.events['resume']){
            super.on('resume',()=>{
                console.log(this.name + ' is resuming...')
            })
        }
       
        super.emit('resume');
        }
}