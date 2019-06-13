/*let count = 5;*/
// count ='a'; // compile error since count is a number 'a' 
//is not a number hence not assignable to count, 
//this can be done in JS where datatypes can be changed on the fly
//let a; // without initialization the type is any, with this you can doLog = (message) => console.log(message); the following in typescript too
// without compile error
/*
a = 1;
a = true;
a = 'a';
*/
// This can be corrected by using
//let a: number; // If you use this then line 19 & 20 will hasve compile error
/*
a = 1;
a = true;
a = 'a';
*/
// Data Types in Typescript
/*
let a: number; // Number
let b: boolean; // boolean
let c: string;  //string
let d: any;     //any
let e: number[]; //Array
//Example array initialization
let f: number[] = [1,2,3,4,5,6,7,8,9];
let g: any[] = [1,true,'a',false,'Tom']; // Not a good practice.
*/
//Using enum Typescript by putting elements in a container
//How it was done in JS
/*const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
*/
// In Typescript
/*
enum Color{Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Blue;
*/
//Type Assertions
//let message = 'abc' // knows that this is a string because of the initialization
//message.endsWith('c') funcction endWith() works with strings
//let message; // Datatype here is any hence does not recognize endsWith()
//message = 'abc' // this can be resolved by type assertion
//let message;
//message = 'abc';
//let endsWithC = (<string>message).endsWith('c'); //using <> brackets to apply string type
// OR
//let message;
//message = 'abc';
//let alternativeWayendsWithC = (message as string).endsWith('c'); // Note: These two ways doLog = (message) => console.log(message); not change the type in memory just for getting access to intellisense
// Concept of Arrow function lamda exp in C#
//JS
/*let log = function(message){
    console.log(message);

}*/
//TS equivalent, no function name
//let log = (message) => console.log(message);
// Custom types in Typescript using inline annotation
// This exaple however is verbose, you might requiere to use those points elsewhere in your code hence repetiotion
// better use would be using an Interface
/*let drawPoint = (point: {x: number, y:number}) => {
    // ...

}

drawPoint({
    x: 1,
    y: 2
})
*/
// Interface use pascal naming convention start with capital letter
/*
interface Point{
    x: number,
    y: number,
    draw:() => void

}

let drawPoint = (point: Point) => {
    // ...

}
let getDistance = (pointA: Point, pointB:Point) => {
    // ...

}
drawPoint({
    x: 1,
    y: 2
})
*/
// The above interface violates the Cohesion principle
// Things that are related should be part of one unit
// This can be achieved by using class
// This is the bulky way of doing it
/*
class Point{
    private x: number;
    private y: number;

    // Constructor -- a method that is called when we initialize the object
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;

    }
    draw(){
        console.log('X: ' + this.x + ' Y: ' + this.y);

    }
    getDistance(another: Point){


    }

}
*/
// A better way of writing the same class
var Point = /** @class */ (function () {
    // Constructor -- a method that is called when we initialize the object
    // Typescript does not allow multiple constructor hence the use of ? mark to allow the construcrtor to be 
    //used differently(overload) by making arguments optional
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // Using methods getX and setX
        /*getX(){
    
            return this.x
        }
        */
        /*
            setX(value){
        
                if(value < 0){
                    throw new Error('Value cannot be less than 0.')
        
                }
                */
        // Using Propertis instead of methods, looks like a field but it is actually a method(getter, setter or both)
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0.');
                this._x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point();
/*point.x = 50; */ // Using private protects this from happening, user trying to change the value
//point.x = 1; //By using constructor we do not need this
//point.y = 3; //By using constructor we do not need this
//let x = point.getX(); //Now with this the user can see the value of x by using the method getX() a member of Point
//point.setX(10); // The user can use setX() to change value, the function is a member of class Point
// Using Property
var x = point.x;
point.x = 151;
point.draw();
