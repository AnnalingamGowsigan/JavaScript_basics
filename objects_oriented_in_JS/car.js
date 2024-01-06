//ES6 Module Syntax
class Car {
    constructor(make, model, year) {
        this._make = make;
        this.model = model;
        this.year = year;
    }

    get make(){
        return this._make;
    }

    set make(value){
        this._make = value;
    }
}

class Toyota extends Car{
    constructor(model, year){
        super("Toyota", model, year);
    }

    brand(){
        console.log("this is toyota");
    }
}

function sayHello(){
    console.log("hello");
}

export function sayHi(){ //export function sayHi in here 
    console.log("hi");
}

export default Car; //export default class Car 
export {Toyota, sayHello}; //export class Toyota, function sayHello, function sayHi


// in one file only we can export one default class but we can export multiple functions and classes