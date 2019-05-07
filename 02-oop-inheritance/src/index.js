const interstellar = new Movie('Interstellar',2014,169)
const starWars = new Movie('Star wars: a new hope',1977,125)
const guardians = new Movie('Guardians of the Galaxy',2014,125)

interstellar.play();
starWars.play();
guardians.play();
interstellar.pause();
interstellar.resume();
const markHamill = new Actor("Mark Hamill",60);
const harrisonFord = new Actor("Mark Hamill",63);
const carrieFischer = new Actor("Carrie Fischer", 59);
const casted =[harrisonFord,carrieFischer];
starWars.addCast(casted);
starWars.addCast(markHamill);