// Object Literals ... //creates multiple instances

  const mySymbol = Symbol ("Key1") 
  const jsUser = {
     email: "adil@knit.ac.in",
     name: "Adil",
     [mySymbol]: "myKey1",  //to convert in symbol use square bracket
     age:25,
     isLoggedIn: false,
     location: "Sultanpur",
     lastLoginDays: ["Monday" , "Friday"]
 }
// console.log(jsUser.email);
// console.log(jsUser.age);
// console.log(jsUser.lastLoginDays);
// console.log(jsUser[mySymbol]);

// jsUser.email = "rasheed@knit.ac.in"
// //Object.freeze(jsUser)    // it will freez the object #no changes Allow
// jsUser.email = "myemail@knit.ac.in"
//console.log(jsUser);

// jsUser.greetings = function(){
//     console.log("Hellow Js Users");
// }
// console.log(jsUser.greetings());

jsUser.greetingsTwo = function(){
    console.log(`Hellow Js Users  ${this.name} , your email is : ${this.email}`);
}
console.log(jsUser.greetingsTwo());

jsUser.greetingsThree = function(){
    console.log(`And Your Location is  ${this.location} , on  ${this.lastLoginDays}`);
}
console.log(jsUser.greetingsThree());
