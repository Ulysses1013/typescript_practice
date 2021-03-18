export {};

class Person {
    constructor(public name:string, protected age:number) {}

    profile(): string {
    return `name: ${this.name},age: ${this.age}`;
    }
}

let jin = new Person('Jin',24);
console.log(jin.profile());
console.log(jin.name);

//getter setter

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string,secretNumber:number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner () {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber
    }

    debugPrint() {
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('Kana',151182)
console.log(card.debugPrint());
card.secretNumber = 111111;

// readonly
class VisaCard {
    constructor(readonly owner: string) {}
}

let myVisa = new VisaCard('Ken');
//myVisa.owner = 'jin'
