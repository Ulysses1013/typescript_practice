export {};

let name: any = 'Tam';

let length = (<string>name).length;


let nickname = 'Tin' as const;
nickname = 'Tin';

let profile = {
    name: 'Tm',
    height: 180
} as const;

//nulltable
let profile2: {name: string, age: number| null} = {
    name: 'Tm',
    age: null
};

//インデックスシグネチャ
interface Profile {
    underTwenty: boolean;
    [index:string]: string | number | boolean;
}

let profile3: Profile = {name: 'Gym', underTwenty: false};

profile3.name = 'Konboy';
profile3.age = 45;
profile3.nationality = 'Japangu';
