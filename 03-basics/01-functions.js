function myName(){
    // console.log("A");
    // console.log("D");
    // console.log("I");
    // console.log("L");
}
myName // function reference
myName() // function execute

function addTwoNumbers(Number1 , Number2){   // it's called function parameter
    //console.log(Number1 + Number2);
}
// addTwoNumbers(44,74)     // function argument
// addTwoNumbers(44,"abc")    // use checking methode like if -else before this type of operation
// addTwoNumbers(44, null)

const result = addTwoNumbers(10,20)
//console.log("Result :" , result);

// function addTwoNumbers(number1 , number2){
//     let result = number1 + number2
//     return result
// }

// addTwoNumbers(55, 45)

function userLoginMessage(username = "Default User"){
    if(!username){
        console.log("please enter a correct username");
        return
    }
   return `${username} just loggedin`
}
//console.log(userLoginMessage("Adil Rasheed"));

// console.log(userLoginMessage()); // if don't pass anything then result undefined

//console.log(userLoginMessage("Adil Rasheed"));

function cartCalculatePrice(num1)
