// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown

const firstName: string = "Shohanur Rahman";
let age: number;
age = 22;
let isMarried: boolean = false;
isMarried=true;
let anyTypeOfThings: any = {name:'Sabi',age:50};
anyTypeOfThings = [12,58,47,54];
anyTypeOfThings = "This is the power of Any";

let number: string | number = '188987';
number = 552551;

type StringOrNumber = string | number;
let number_2: string | number = '789987';
number_2 = 784124;




let person: object  = {
    name: "Shohanur Rahman",
    age: 21,
    hobby: "reading"
}

let person_2: {name:String, age:number, hobby:string}  = {
    name: "Samina Mahjabeen",
    age: 12,
    hobby: "Sleeping"
}

let person_3: {name:String, age:number, favourite_game?:string}  = {
    name: "Rahul",
    age: 30,
}

// type PersonType = {name:String, age:number, favourite_game?:string} ;
// Or
interface PersonType {
    name:String;
    age:number;
    favourite_game?:string
}

let person_4: PersonType = {
    name: "Rahul",
    age: 30,
}

let person_5: PersonType = {
    name: "Rahul",
    age: 30,
    favourite_game:'Football'
}




const marks: number[] = [81,771,63,58,89];
const anything: (string | number | boolean)[] = [20, 'oree', 'maruf', true, 50];
type ForArray = (string | number | boolean)[];
const anything_2: ForArray = [20, 'oree', 'maruf', true, 50];

interface PersonTypeAgain { 
    age: number;
    name: string;
    hobby?: string 
}
const persons: PersonTypeAgain[] = [
    { 
        name: "Shohanur Rahman",
        age: 12,
        hobby: "Sleeping"
    },
    { 
        name: "Shohanur Rahman",
        age: 12,
        hobby: "Sleeping"
    },
    { 
        name: "Shohanur Rahman",
        age: 12,
        hobby: "Sleeping"
    }
];





const greeting = (name: string) : void => {
    console.log(`Hello ${name}`)
}
greeting('tahsin Aziz');

const addition = (num1: number, num2: number) : number => {
   return num1+num2;
}
addition(41.1,50);

const introduce = ({name, age} : PersonTypeAgain) : void => {
    console.log(`Hello, my name is  ${name}, And I'm ${age}!`)
}
introduce({
    name: "Shohanur Rahman",
    age: 12,
    hobby: "Sleeping"
})
introduce({
    name: "Shohanur Rahman",
    age: 12,
})

const getArray = <T>(arr: T[]): T[] => {

    return arr
}

getArray<string>(['1edrew', 'hjdfhjddfjh dfndj' ]);
getArray<number>([ 1, 2,43, 4 ]);




// enum

enum options {
    Java,
    C,
    Paython,
    Ruby
}

console.log(options.C)

enum Week  {
    Sat = 'SAT',
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thr = "THR",
    Fri = "FRI"
}

console.log(Week.Sat)







