// const user = {
//     //username: "Rasheed" ,
//     contact: "9044556677" ,

//     welcomeMessgae: function (){
//         //console.log(`${this.username} , welcome to my website`);
//         //console.log(this);  //this keyword works only on current context

//     }
// }
// //user.welcomeMessgae()
// //user.username  = "Adil"
// //user.welcomeMessgae()
// //console.log(this);

// function myDetails(){
//     let username = "Adil"
//     console.log(this.username);

// }
// myDetails()

// const user = function (){
//     let username = "Rasheed"
//     console.log(this.username);
// }

//---------Arrow Function------------

// const user = () => {    // arrow function declaration without using function keyword
//  let username = "afandi"
//  console.log(this);
// }
// user()

// const addTwo = (num1 , num2) => {
// return num1 + num2      //explicit need to write return 
// }
//const addTwo = (num1 , num2) => num1 + num2
//const addTwo = (num1 , num2) => (num1 + num2)   // implicit no need to write return it's a coorect syntax 

const addTwo = (num1 , num2) => ({username: "Adil Rasheed"})
console.log(addTwo(400, 20))