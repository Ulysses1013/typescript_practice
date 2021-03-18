export {};

type MyExclude<T, U> = T extends U ? never : T;
type DedugType = () => void;
type SomeTypes = string | number | DedugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type TypeExcluding = Exclude<SomeTypes, Function>;
type MyFunctionType = MyExclude<SomeTypes, string | number>;

type FunctionTypesExtract = Extract<SomeTypes, DedugType>;

type NullableType = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableType>;

