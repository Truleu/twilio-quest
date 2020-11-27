class Materializer {
    constructor(first){
        this.target = first;
        this.activated = false;        
    }
    activate(){
        this.activated = true;
    }
    materialize(){
        if (this.activated == true){
            return this.target;
        } else {
            return undefined;
        }
    }
}