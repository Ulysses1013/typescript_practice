export {};

type Profile = {
    name: string;
    age: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

// mapped-types
type PropertyTypes = keyof Profile;

// readonly
const me: Profile = {
    name: 'ten',
    age: 48,
};

me.age++;

type PersonalData = Readonly<Profile>;

const friend: PersonalData = {
    name: 'ken',
    age: 21,
};

type YomitoriSenyo<T> = {readonly [P in keyof T]: T[P] };
type YomitoriProfile = YomitoriSenyo<Profile>;


// Record<K,T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori'| 'Shiga';

type Covid21Info = {
    Kanji: string;
    confirmed: number;
};

const covid21Japan: Record<Prefectures, Covid21Info> = {
    Tokyo: { Kanji: '東京',confirmed: 20000},
    Chiba: { Kanji: '千葉',confirmed: 3000},
    Tottori: { Kanji: '鳥取',confirmed: 600},
    Shiga: { Kanji: '滋賀',confirmed: 200},
};

// Extract

type DedugType = () => void;
type SomeTypes = string | number | DedugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunction = Exclude<SomeTypes,DedugType>;
type TypeExcluding = Exclude<SomeTypes, Function>;

type FunctionTypesExtract = Extract<SomeTypes, DedugType>;

type NullableType = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableType>;