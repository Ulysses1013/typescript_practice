export {};

let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let foonumberLiteral: 1976 = 1976;
fooNumber = foonumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number,public name: string) {}
}

let me: Animal;
me = new Person(34,'razuOji');

//ジェネリック

const echo = <T> (arg: T): T => {
   return arg;
};

 console.log(echo<number>(100));
 echo<string>('Hello');
 echo<boolean>(true);

class Mirrar <T> {
     constructor(public value: T) {}

     echo(): T {
         return this.value;
     }
}

 new Mirrar<number>(321).echo();
 new Mirrar<string>('ken').echo();
 new Mirrar<boolean>(false).echo();