export{}

type DetailedProfile = {
    name: string;
    height: number;
    weight:number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile =  Omit<DetailedProfile, 'height'>;

// return-type

function add(a:number, b:number) {
    return a + b;
}

console.log(add(1,2));

type ReturnTypeAdd = ReturnType<typeof add>;

// parameters

const debugProfile = (name:string, age:number) => {
    console.log({ name, age });
};

debugProfile('Han', 24);

type Profile = Parameters<typeof debugProfile>;

const profile:Profile = ['Den', 82];

debugProfile(...profile);

// constructor parameters

class Person {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }
}

let souma = new Person('souma',18);
console.log(souma);

type PersonType = typeof Person;

type file = ConstructorParameters<PersonType>;

const human: file = ['rice', 23];
const rice = new Person(...human);
console.log(rice);