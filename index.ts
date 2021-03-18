export {};
let year:number = 1999;

let name:string = 'shou';

let numbers:number[] = [1,2,3];

let strings:string[] = ['TypeScript','JaveScript','CoffeeScript'];

let nijigenHairetsu:number[][] = [
    [50,100],
    [150,300]
];

let hairetsu:(string | number | boolean)[] = [1, false, 'Japan'];

let profile:[string,number] = ['Jin', 25];

function returnNothing():void {
    console.log('no');
}
let absence:null = null;
let data:undefined = undefined;

function error(message:string):never {
    throw new Error(message);
}

let profile1:object = { name: 'jin' };
let profile2: {name:string} = { name: 'jin' };

type Mojiretsu = string;
const fooString:Mojiretsu = 'jin';

type Profile = {
    name:string;
    age:number;
};
const example1:Profile = {
    name:'sora',
    age:16
};

interface ObjectInter {
    name:string;
    age:number;
};
let object1:ObjectInter = {
    name:'hotaru',
    age:15
};

const kansu = (): number => 4;
let numberAny:any = kansu();
let numberUnknown:unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number' ) {
    let sumUnknown = numberUnknown + 10;
};
