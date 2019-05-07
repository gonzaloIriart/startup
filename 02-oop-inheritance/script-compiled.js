class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return this;
  }

  emit(eventName) {
    let e = this.events[eventName];
    if (!e) return false;
    e.forEach(cb => {
      cb();
    });
    return true;
  }

  off(eventName, callback) {
    let e = this.events[eventName];
    if (!e) return this;

    for (let i = e.length; i > 0; i--) {
      if (e[i] === callback) {
        e.splice(i, 1);
        break;
      }
    }

    return this;
  }

}
class Logger {
  constructor() {}

  log(...info) {
    console.log(`The ${info || ""} event has been emitted`);
  }

}
class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    super.emit('play');
  }

  pause() {
    super.emit('pause');
  }

  resume() {
    super.emit('resume');
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      cast.forEach(actor => this.cast.push(actor));
    } else {
      this.cast.push(cast);
    }
  }

}
