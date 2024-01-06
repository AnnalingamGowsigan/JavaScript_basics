import C from './car.js';//importing the car class as default 
import {sayHello as say, sayHi} from './car.js' //importing the sayHello and sayHi functions from car.js
import {Toyota} from './car.js'; //importing the Toyota class from car.js

let mycar  = new C("toyota", "camry", 2020);
let mytoyota = new Toyota("camry", 2020);

console.log(mycar.make);
console.log(mytoyota.make);
say();
sayHi();