///rest operator
function price(n1) {
  return n1;
}
console.log(price(100, 200, 300, 400, 500)); // output is 100 without rest operator

//
function price(...n2) {
  return n2;
}
console.log(price(100, 200, 300, 400, 500, 600)); // output is as desired with rest operator [100,200,300,400,500,600]
// while using rest operator, it is implied on all the function works on this particular workplace
function price(...n3) {
  return n3;
}
console.log(price(300, 200, 300, 400, 500, 600));
//
function price1(num1) {
  return num1;
}
console.log(price1(300, 200, 300)); // without rest operator 300
function price2(...num2) {
  return num2;
}
console.log(price2(400, 500, 600)); // with rest operator [400,500,600]
//
function price(val1, val3, val2, ...num2) {
  return num2;
}
console.log(100, 200, 300, 400, 500, 600);
/// function with object
const user = {
  name: "Swapnanil",
  age: 21,
  id: "Swapnanil@gmail.com",
}; // object deceleration
const user1 = {
  name: "Supriti",
  age: 18,
  id: "Supriti@gmail.com",
}; // object deceleration
function handleUser(anyUser) {
  console.log(
    `User name is ${anyUser.name} and age is ${anyUser.age} and id is ${anyUser.id}`
  );
} // define function
handleUser(user); // call function
handleUser(user1); // call function
//
// array in function
// method of writing array in function (1)
const nameList = ["Swapnanil", "Supriti", "Baban", "Pechu", "Diya", "Dip"]; // writing of array
function list(Name) {
  return Name[2]; // return array in function
} // setup the function
console.log(list(nameList)); // output by printing the function and here we won't use the call function with the help of references
//
// method of writing array in function(2)
const nameList1 = [100, 200, 300, 400];
function list1(getNameList) {
  console.table([getNameList[0], getNameList[3]]); //writing
}
list1(nameList1); // call function with the help of reference
//
function price3(val3, val4, ...num3) { 
  result = val3 * val4;
  console.log(result);
  return num3;
} // using rest operator
console.log(price3(100, 200, 300, 400, 500, 600));
