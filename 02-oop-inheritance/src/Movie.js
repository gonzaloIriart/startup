class Movie{
    constructor(name,year,duration){
        this.name = name;
        this.year = year;
        this.duration = duration;
    }

    play(){
        console.log(this. name + ' is playing')
    }

    pause(){
        console.log('movie is paused')
    }

    resume(){
        console.log('resuming movie')
    }
}