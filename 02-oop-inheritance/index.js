//Ex 1 movie instances


const starWars = new Movie('Star wars: a new hope',1977,125)
const guardians = new Movie('Guardians of the Galaxy',2014,125)

//Ex 3 actors
const markHamill = new Actor("Mark Hamill",60);
const harrisonFord = new Actor("Mark Hamill",63);
const carrieFischer = new Actor("Carrie Fischer", 59);
const casted =[harrisonFord,carrieFischer];
starWars.addCast(casted);
starWars.addCast(markHamill);

//Ex 3 Logger
const l = new Logger();
starWars.on('play',() =>l.log('play'));
starWars.play();

//Ex 4 mixins

const social = {
    share(friendName){
        console.log(`${friendName} shares ${this.name}`);
    },

    like(friendName){
        `${friendName} likes ${this.name}`;
    }
}

Object.assign(Movie.prototype,social);
const interstellar = new Movie('Interstellar',2014,169)
interstellar.share('Jose');