// variable and constant

const collegeName = "NIT DURGAPUR";
let firstName = "Swapnanil";
let lastName = "Manna";
lastName = "Mondal";
firstName = "Supriti";
let emailId = "supritimondal1102@gmail.com";
emailId = "swapnanilmanna06694@gmail.com";
let cityName = "Contai";
cityName = "Guskara";
accountCity = "Durgapur";
console.table([
  emailId,
  cityName,
  firstName,
  lastName,
  accountCity,
  collegeName,
]);

// to comment alert for showing pop up
/*alert ("404 error");*/

let myName = "Swapnanil";
let age = 21;
let gender = " ";
let isAdult = true;
let state;
state = "West bengal";
let occupation = null;
/*

console.log(typeof isAdult);
console.log(typeof myName);
console.log(typeof "Swapnanil");
console.log(typeof state);
console.log(state);
console.log( typeof age);
console.log(typeof null);
console.log( typeof gender);
*/
console.log(occupation);
console.log(typeof occupation);
console.log(null);
// datatype conversion
let score1 = "66";
let score2 = "33abc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
// example2
console.log(3 % 2);
let str1 = "Swapnanil";
let str2 = " Manna";
let str3 = str1 + str2;
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");
console.log("1" + 2 + "2");
console.log("1" + 2 + 2);
console.log("1" + (2 + 2));
console.log(true);
console.log(typeof true);
console.log(typeof "");
// important conversion
let score = "";
let valueInNumber = Number("");
console.log(valueInNumber);
console.log(score);
console.log(typeof valueInNumber);
console.log(typeof score);

//
console.log(+true);
console.log(+"");
//
let num1 = 100;
++num1;
console.log(num1);
//
let num2 = 100;
num2++;
console.log(num2);
//
let num3 = 101;
++num3;
console.log(num3);
//
let num4 = 101;
num4++;
console.log(num4);
//
// datatype comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 != 1);
console.log(2 == 1);
//#1
console.log(null > 0);
console.log(null < 0);
console.log(null != 0);
console.log(null >= 0);
//
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined != 0);
console.log(undefined >= 0);
//
console.log("2" > 1);
console.log("2" === 2);
//
// to be noted
const id = Symbol("123");
const newId = Symbol("123");
console.log(id === newId);
//to be noted
//
const bigNumber = 515162661636161556561555n;
console.log(typeof bigNumber);
//
// object
let myInfo = {
  firstName: "Swapnanil",
  lastName: "Manna",
  age: 21,
  gender: "Male",
  occupation: "Student",
};
myInfo.firstName = "Supriti";
console.log(myInfo);
console.log(typeof myInfo);
//
// function
console.log(typeof bigNumber1);
// function1
function greet(name) {
  console.log("Hello " + name);
}
greet("Swapnanil");
greet("Supriti");
console.log(typeof greet);
// function2 (assign function as a constant being declared)
let myFunction1 = function greet(name) {
  console.log("Hello" + name);
};
greet("Swapnanil");
greet("Supriti");
console.log(typeof greet);
console.log(typeof myFunction1);
// function3 (assign function as a constant being declared)

const myFunction2 = function greet(name) {
  console.log("Hello" + name);
};
greet("Swapnanil");
greet("Supriti");
console.log(typeof greet);
console.log(typeof myFunction2);
//
//array of functions
let mySuperHeroes = ["Shaktiman", "Nagarjunan", "Goda", "Krish"];
console.log(mySuperHeroes);
console.log(typeof mySuperHeroes);
console.log(mySuperHeroes[2]);
//
//
const id1 = Symbol("123");
console.log(id1);
console.log(typeof id1);
//
// stack and heap memory
// heap memory
let personOne = {
  name: "swapnanil",
  surname: "Manna",
  city: "Contai",
  age: 21,
  email: "swapnanilmanna06694@gmail.com",
};
personOne.surname = "Mondal";
personOne.name = "Supriti";
personOne.email = "supritimondal1102@gmail.com";
console.log(personOne);
console.log(typeof personOne);
//
// stack memory usage
let myId = "22A80085";
let anotherId;
anotherId = myId;
anotherId = "22ME8079";
console.log(anotherId);
console.log(typeof myId);
console.log(myId);
//
let myId1 = "22A80085";
let anotherId1;
anotherId1 = myId1;
console.log(anotherId1);
//
//string
console.log("hello " + "world");
//
const name = "Swapnanil";
let age1 = 21;
let city = "contai";
console.log(`my name ${name} my age is ${age1} and is live in ${city}`);
// important example
const gameName = new String("football");
console.log(typeof gameName);
console.log(gameName);
console.log(gameName[2]);
console.table([
  gameName[3],
  gameName[4],
  gameName[5],
  gameName[6],
  gameName[7],
]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf("f"));
console.log(gameName.indexOf("o"));
console.log(gameName.substring(0, 4));
console.log(gameName.substring(4, 8));
console.log(gameName.substring(8, 12));
console.log(gameName.charAt(4));
console.log(gameName.match(/football/));
console.log(2 + 2);
//
//Numbers and maths in javascript
const price = 400;
const balance1 = new Number(100);
console.log(typeof price);
console.log(typeof balance1);
console.log(balance1);
console.log(price);
// converting number to string
console.log(balance1.toString());
console.log(typeof balance1.toString());
//
const num = 23.8964;
console.log(num.toFixed(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(4));
//
const NUMBER = 100;
console.log(NUMBER.toFixed(2));
//
const NUMB = 123.89666;
console.log(NUMB.toFixed(3));
//
//Maths in javascript
console.log(Math);
console.log(typeof Math);
console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
//
// Date and time in javascript
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.getFullYear());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
//
//array

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);
console.log(typeof myArray);
console.log(myArray.length);
console.log(myArray[0]);
//
let myArray1 = [0, 2, "DIP", "2>0", 2 > 0];
console.log(myArray1);
console.log(myArray1.length);
console.log(typeof myArray1);
console.log(typeof myArray1[4]);
console.log(myArray1[4]);
console.log(myArray1.length);
//
//
let myArray2 = new Array(0, 2, 3 < 0, 2 + 2, "DIP");
console.log(myArray2);
console.log(typeof myArray2);
console.table([myArray2[2], myArray2[3]]);
console.log(typeof myArray2[2]);
console.log(typeof myArray2[3]);
console.log(myArray2.length);
//array methods
//(1)push
const n1 = [0, 1, 2, 3];
n1.push(4, 5);
console.log(n1);
console.log(n1.length);
console.log(typeof n1);
//(2)pop
const n2 = [0, 1, 2, 3];
n2.pop();
console.log(n2);
//
const n3 = [0, 1, 2, 3, 4];
const lastNumber = n3.pop();
console.log(n3);
console.log(lastNumber);
//
//object
const mySym = Symbol("key1");
let myObject = {
  firstName: "Swapnanil",
  lastName: "Manna",
  "full Name": "Swapnanil Manna",
  age: 21,
  gender: "Male",
  occupation: "Student",
  [mySym]: "Om",
  mySym: "Om",
};
myObject.firstName = "Supriti";
myObject.age = 18;
myObject.gender = "Female";
myObject.sideOccupation = "freelancer";
console.log(myObject);
console.log(myObject.sideOccupation);
console.log(myObject["full Name"]);
console.log(myObject.mySym);
console.log(typeof myObject.mySym);
console.log(myObject[mySym]);
//
// function involvement in object
// exp1

let i = {
  name: "Swapnanil",

  age: 21,
  city: "contai",
}; // general syntax of object
console.log(i);
i.greet = function () {
  //implementing function in object
  console.log("Hello " + i.name); // same as console.log('Hello '+ i.name);
};
console.log(i.greet()); // output= Hello swapnanil, as name:'Swapnanil'
console.log(i.greet); // output= [Function (anonymous)]
console.log(typeof i); // output = object
console.log(typeof i.greet); // output = function
console.log(typeof i.name); // output = string
// exp2

let i1 = {
  name1: "Swapnanil",
  name2: "Supriti",
  age: 18,
  age: 21,
  city: "contai",
};
i1.greeting = function () {
  //
  console.log(`Hii you both,${this.name1} and ${this.name2}`); // to print more than one name by using (``)
};
console.log(i1.greeting()); // absolute way to print a function
//
// singletons
const tinderUser = new Object(); // empty set
console.log(tinderUser);

const tinderUser1 = {}; // intentionally left {}
tinderUser1.id = 1005;
tinderUser1.name = "Swapnanil"; // methods to insert values in object
tinderUser1.isLoggedIn = true;
console.log(tinderUser1); // output={name:'Swapnanil', isLoggedIn:true, id:1005}
console.table([typeof tinderUser1, typeof tinderUser]); //printed more than one data in tabular form
// nested object=> objects inside an object
const realUser = {
  realName: {
    fullName: {
      firstName1: "Swapnanil",
      middleName: "Neel",
    },
    lastName1: "Manna",
  },
  age: 21,
  city: "Contai",
};

console.log(realUser);
console.log(realUser.realName);
// concatenation of objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 }; // print output as object inside object
const obj4 = Object.assign({}, obj1, obj2); // print output as discrete values, empty curly braces are needed
console.log(obj3);
console.log(obj4);
// spread operator

const obj5 = { 1: "a", 2: "b" };
const obj6 = { 3: "c", 4: "d" };
const obj7 = { ...obj5, ...obj6 }; // this is how spread operator works
console.log(obj7);
// objects inside array
const sData = [
  { name: "Swapnanil", age: 21, city: "Contai" },
  { name: "Supriti", age: 18, city: "Contai" },
]; // this is how objects are included in the form of an array

console.log(sData); // to print all the objects
console.log(sData[0].name); // to print specific elements containing in the object
//console.log(Object.Keys(obj1)); // to print all the keys of the object
//destructuring the objects
const course = {
  courseName: "Javascript",
  author: "Swapnanil",
  rating: 4.5,
};
console.log(course.name1, course.author, course.rating); // output print in a single line
console.table([course.name1, course.author, course.rating]); // output print in a tabular format
const { author, rating, courseName } = course; // syntax for destructuring
console.log(author, rating, courseName); // output print in a single line
// api and JSON
let object10 = {
  name: "Swapnanil",
  age: 21,
  city: "Contai",
}; // this is an object
//
/*{
  "NAME": "Swapnanil",
  "courseName": "web-development",

} // this is a JSON
*/
//
// Function
// exp1
function addition(n1, n2) {
  console.log(n1 + n2);
}
addition("3", 4); // reference + execution
//exp2
function S() {
  console.log(2 + 2); // output=4
}
S();
//exp3
function multiplication(n1, n2) {
  console.log(n1 * n2); // output=6
}
multiplication(3, 2);
//exp4
function square(n1, n2) {
  console.log(n1 * n2); // output=0, as null=0
}
square(2, null);
// exp5
function addition(n1, n2) {
  console.log(n1 + n2);
}
addition(); // reference without execution, that's why we need parenthesis()
//exp6
function addition(n1, n2) {
  console.log(n1 + n2); // out
}
const result = addition(2, 3);
console.log(result); // this method's give output as UNDEFINED
//exp7
function addition(n1, n2) {
  let result = n1 + n2;
  return result;
}
addition(2, 3);
console.log("Result: ", result); // this method's give a valid output
// exp8
function subtraction(n1, n2) {
  let result = n1 - n2;
  console.log("Swapnanil your output is : ", result);
  return result;
}
subtraction(5, 3);
console.log(result);

//
//rest operator
function price(n1){
  return n1;
}
console.log(price(100,200,300,400,500));







































