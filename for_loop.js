//for loop
//1
for (let index = 0; index <= 5; index++) {
  console.log("Hello World", index);
}
//2
for (let index = 0; index <= 5; index++) {
  const element = index;
  console.log(element);
}
//3
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}
//4
for (let i = 0; i <= 2; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  } else {
    console.log("all the best");
  }
  console.log(element);
}
//5
for (let i = 0; i <= 3; i++) {
  console.log(`outer loop value is ${i}`);
  for (let j = 0; j <= 2; j++) {
    console.log(`inner loop value is ${j} and inner loop value is ${i}`);
  }
}
// printing tables, it consists nested loops, meaning that loop within loops
for (let i = 1; i <= 10; i++) {
  console.log(`table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
//array in loops
let myArray = ["superman", "batman", "flash", "wonder-women"];
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
} //i<=myArray led to 'undefined' value
//




