const myNumbers = [2,3,5,7,11,13,17,19,23,29]
//const newNumbers = myNumbers.map( (num) => num = num + 10 )

const newNumbers = myNumbers
                    .map( (num) => num = num * 7 )
                    .map( (num) => num = num + 7 )
                    .filter( (num) => num = num >= 60 )
console.log(newNumbers);