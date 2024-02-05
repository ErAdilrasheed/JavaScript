let a = 200
const b = 400
var c = 500

if (true){
    let a = 20
    const b = 40
    var c = 50
    //console.log("inner a: ", a);   
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "AdilRasheed"
    function two(){
        const website = "adilrasheed.me"
        //console.log(username);
    }
    //console.log(website);   //can't access bcz it'z out of scopes
    //two()
}
//one()

if(true){
    const myName = "Adil"
    if(myName === "Adil"){
        const website = " Youtube"
        //console.log(myName + website);
    }
    //console.log(website);   // not accessible out of the scope

}
//console.log(myName);

//+++++++++++++++Interesting+++++++++++++

console.log(addone(10));         // worked bcz there is no variable holding to function
function addone (num){
    return num + 1
}


console.log(addTwo(15));   //not worked here variable declared and it hold the function so can not execute
const addTwo = function (num){   //can't access before initialization
    return num + 2
}
