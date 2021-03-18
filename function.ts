export {};

let bmi: (height:number,weight:number) => number = (
    height:number,
    weight:number
):number => weight / (height * height);

console.log(bmi(1.80,67));

let bmi1 = (height:number,weight:number,printble?:boolean):number => {
    if (printble) {
        return weight / (height*height);
    };
};
bmi1(1.80,70,true);

const nextYear = (current: number,rate: number = 1.1) => {
    return current * rate;
}
console.log(nextYear(1000));

const reducer = (accumulator: number,currentValue: number) => {
    return accumulator + currentValue;
};

const sum = (...values:number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1,2,3,4,5));

// overload
function double(value: number):number;
function double(value: string):string;

function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    } 
}

console.log(double(100));
