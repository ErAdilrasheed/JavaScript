// data types 
/* Number, bigInt, String, Boolean, Symbol, Null, Undefined, */

let numberOne = 54;
let numberTwo = "786";
let numberThree = Number(numberTwo)
//console.log(typeof numberThree);
numberThree = numberOne + numberTwo
//console.log(numberThree);

let userOneIsLoggedIn = Boolean
let userTwoIsLoggedIn = Symbol
let userThree = 1
//console.log(userOneIsLoggedIn, userTwoIsLoggedIn, userThree);

// Stack  (Primitive) ,  Heap (Non-Primitive)

let myYoutubeName = "Adil Rasheed Afandi"
let anotherName = myYoutubeName
anotherName = "er.AdilRasheed"
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "adilknit@gmail.com",
    age: 24
}

let userTwo = userOne

userTwo.email = "rasheedknit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// because of reference 
