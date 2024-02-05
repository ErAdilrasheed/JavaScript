// if statement

let myName = "Adil"
if (myName = "Adil") {
    //console.log("You are a good developer😘");   
}

const score = 292
if (score >= 272) {
  //console.log("India will win❤");  
}

// if- else statement

let srilankaScore = 295
let indiaScore = 296

if (indiaScore >= 295) {
    //console.log("India Won the Final");
}
else{
    console.log("Srilanka won the final");
}

// Operators 
//  < , > , <= , >= , != , !== , == , (===  for strict check)

const userLoggedIn = true
if (2!=3) {
   //console.log("Succesfully Loggedin:"); 
}

const Temprature = 41
if (Temprature > 40) {
    //console.log("Don't go outside"); 
} else {
  console.log("Enjoy the Weather");  
}

// multiple if-else 
const balance = 1000;
if (balance < 500) {
    console.log("Too less");
} else if (balance < 750) {
    console.log("Average");

} else if (balance == 1000){
    //console.log("You Have Enough balance");
} else {
    console.log("You have more than 1000");
}

const userLoggedin = true
const haveDebitcard = true
if (userLoggedIn && haveDebitcard) {
    //console.log("You Can Buy any Course");
}

const logginWithEmail = true
const logginWithGmail = false
const logginWithMobileNumber = true
if (logginWithEmail || logginWithGmail || logginWithMobileNumber) {
    console.log("Great! You are Loggedin");
    
}