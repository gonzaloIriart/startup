class EventEmitter{
    constructor(){
        events = {}
    }

    on(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        }else{
            this.events[eventName] = [callback];
        }
    }

    emit(eventName){
        let e =this.events[eventName];
        if(!e) return false;        
        e.forEach(cb=> {
            cb()
        });
           
        return true;
    }

    off(eventName,callback){
        let e = this.events[eventName];
        if(!e) return this;
        for(let i = e.length; i>0;i--){
            if(e[i] === callback){
                e.splice(i,1);
                break;
            }
        }
        return this;
    }
}