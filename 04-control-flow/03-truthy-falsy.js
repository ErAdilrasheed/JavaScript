 const userEmail = []

// if (userEmail) {
//     console.log("Got user Email");
// } else{
//     console.log("Don't have user Email");
// }

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user Email");
// } else{
//     console.log("Don't have user Email");
// }

// falsy value
//  false , 0 , -0 ,  BigInt 0n , "" , null , NaN , undefined

//truthy value 
"0" , " " , 'false' , {} , [] , function (){}  //empty function

if (userEmail.length === 0){   // to check array length
    //console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {  // to check object is empty 
    console.log("Object is empty");
    
}

//===========comparison=========

/* false == 0  result true 
   false == '' result true
   0 == ''     result true   */

   // Nullish Coalescing Operator  (??)  -> used for null and undefined fetching from database
   //val1 = 5 ?? 10
   //val1 = null ?? 20
   //val1 = undefined ?? 30
   val1 =  null ?? 40 ?? undefined ?? 50
   //console.log(val1);

   // Ternary Operator

   // condition ? true : false

   const icePrice = 100
   icePrice <= 80 ? console.log("less than 80 ") : console.log("moore than 80")