//function myName(){
    // console.log("A");
    // console.log("D");
    // console.log("I");
//     // console.log("L");
// }
// myName // function reference
// myName() // function execute

//function addTwoNumbers(Number1 , Number2){   // it's called function parameter
    //console.log(Number1 + Number2);
//}
// addTwoNumbers(44,74)     // function argument
// addTwoNumbers(44,"abc")    // use checking methode like if -else before this type of operation
// addTwoNumbers(44, null)

//const result = addTwoNumbers(10,20)
//console.log("Result :" , result);

// function addTwoNumbers(number1 , number2){
//     let result = number1 + number2
//     return result
// }

// addTwoNumbers(55, 45)

// function userLoginMessage(username = "Default User"){
//     if(!username){
//         console.log("please enter a correct username");
//         return
//     }
//    return `${username} just loggedin`
// }
//console.log(userLoginMessage("Adil Rasheed"));

// console.log(userLoginMessage()); // if don't pass anything then result undefined

//console.log(userLoginMessage("Adil Rasheed"));

// function calculateCartPrice(val1, val2,...num1){  //... known as rest operator or sprade operator
//     return num1
// }
//console.log(calculateCartPrice(200 ,400, 500 , 2000))  // val1 stores 200 and val2 stores 400 and rest are stores in ...num1
const user = {
 username: "Adil Rasheed" , 
 price: "999"
}

function objectHandle(anyobject){
//console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//objectHandle(user)
objectHandle({
    username: "Adil",
    price: "700"
})

const myNewArray = [500, 600, 700, 800]
function findLastValue(getArray){
    return getArray[3]
}
//console.log(findLastValue(myNewArray));

console.log(findLastValue([500, 600, 700, 800]));