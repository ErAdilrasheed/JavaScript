const myNums = [7,6,3,6]
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(` acc: ${acc} , curr: ${currval}`);
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc, curr) => acc + curr ,0 )
 //console.log(myTotal);

 const shoppingCart = [
    {
        couresename: "Web Development",
        price: 2999
    },
    {
        couresename: "APP Development",
        price: 4999
    },
    {
        couresename: "Data Structure",
        price: 1999
    },
    {
        couresename: "Data Science",
        price: 9999
    },
 ]

const totalPayment = shoppingCart.reduce( (acc  , item) => 
acc + item.price, 0 )
console.log(totalPayment);