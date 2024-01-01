//high order loops
//for of loop
const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`each character is ${greet}`);
}
// map
 const map = new Map();
    map.set("name", "diya");// syntax is map.set("key","value")
    map.set("age", 20);
    map.set("hobby", "coding");
    map.set("profession", "student");

    console.log(map);
// for of loop using map
for (const [key, value] of map) { // key: value are iterable; syntax: [key, value]
  console.log(`key is ${key} and value is ${value}`);
}
//
// for of loop using object is not working at all

const myObject = {
  name: "diya",
  age: 20,
  hobby: "coding",
  profession: "student",
};
for (const [key,value] of myObject) {
    console.log(iterator.name);
    
}
// for in loop
const myObj = {
    js : javascript,
    py : python,
    rb : ruby,
    
    java : java,
}
for (const key in myObj) {
   // console.log(myObj[key]);
    }

 
