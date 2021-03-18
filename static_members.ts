export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Ayaka';
    static lastName: string = 'Kamisato';

    static work() {
        return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
    }
}


//名前空間
namespace Japanese {
    export namespace Tokyo{
        export class Person {
        constructor(public name: string) {}
        }
    }
    
    export namespace Osaka{
        export class Person {
            constructor(public name: string) {}
        }
    }
    
}

namespace English {
    export class Person {
     constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
        ) {}
    } 
}

const me = new Japanese.Tokyo.Person('クレー');
const meosaka = new Japanese.Osaka.Person('グレイ');

//継承
class Animal {
    constructor(public name:string) {}

    run():string {
        return 'I can run';
    }
}

class Lion extends Animal {
    public speed: number;

    constructor(name:string, speed: number) {
        super(name);

        this.speed = speed;
    }

    run():string {
        return `${super.run()} ${this.speed}km/h.`;
    }
}

console.log(new Lion('Simba',80));

//抽象クラス
abstract class Animal1 {
    abstract cry(): string;
}
class Lion1 extends Animal1 {
    cry() {
        return 'roar';
    }
}
class Tiger extends Animal1 {
    cry() {
        return 'grrrr';
    }
}

// interface 多重継承
class Mihoyo {}
class Xiao {}

class Tea extends Mihoyo {}

interface Kenja {
    iona(): void;
}

interface Senshi {
    attack(): void;
}

class Jiro implements Kenja, Senshi {
    iona(): void {
        console.log('iona');
    }
    attack(): void {
        console.log('kougeki');
    }
}
const jiro = new Jiro();
jiro.attack();
jiro.iona();