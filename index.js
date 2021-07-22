"use strict";
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown
var firstName = "Shohanur Rahman";
var age;
age = 22;
var isMarried = false;
isMarried = true;
var anyTypeOfThings = { name: 'Sabi', age: 50 };
anyTypeOfThings = [12, 58, 47, 54];
anyTypeOfThings = "This is the power of Any";
var number = '188987';
number = 552551;
var number_2 = '789987';
number_2 = 784124;
var person = {
    name: "Shohanur Rahman",
    age: 21,
    hobby: "reading"
};
var person_2 = {
    name: "Samina Mahjabeen",
    age: 12,
    hobby: "Sleeping"
};
var person_3 = {
    name: "Rahul",
    age: 30,
};
var person_4 = {
    name: "Rahul",
    age: 30,
};
var person_5 = {
    name: "Rahul",
    age: 30,
    favourite_game: 'Football'
};
var marks = [81, 771, 63, 58, 89];
var anything = [20, 'oree', 'maruf', true, 50];
var anything_2 = [20, 'oree', 'maruf', true, 50];
var persons = [
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
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting('tahsin Aziz');
var addition = function (num1, num2) {
    return num1 + num2;
};
addition(41.1, 50);
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, my name is  " + name + ", And I'm " + age + "!");
};
introduce({
    name: "Shohanur Rahman",
    age: 12,
    hobby: "Sleeping"
});
introduce({
    name: "Shohanur Rahman",
    age: 12,
});
var getArray = function (arr) {
    return arr;
};
getArray(['1edrew', 'hjdfhjddfjh dfndj']);
getArray([1, 2, 43, 4]);
// enum
var options;
(function (options) {
    options[options["Java"] = 0] = "Java";
    options[options["C"] = 1] = "C";
    options[options["Paython"] = 2] = "Paython";
    options[options["Ruby"] = 3] = "Ruby";
})(options || (options = {}));
console.log(options.C);
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thr"] = "THR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Sat);
