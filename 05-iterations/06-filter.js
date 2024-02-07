const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumbers = myNumbers.filter( (num) => {
//     return num > 4
// } )

// const newNumbers = myNumbers.filter( (num) => ( num > 4)) 
// console.log(newNumbers);

// const newNumbers = []
// myNumbers.forEach( (num) => {
//     if (num > 4) {
//         newNumbers.push(num)
//     }
// } )
// console.log(newNumbers);


const studentsData = [
    {name: "Adil Rasheed", gender: "male" , BOY: 1996 ,
     city: "mau" , mobile: 9616316925},
     {name: "Aryan Siddiqui", gender: "male" , BOY: 1999 ,
     city: "gola" , mobile: 6392923456},
     {name: "Akash Agrawal", gender: "male" , BOY: 2003 ,
     city: "aligarh" , mobile: 7956326896},
     {name: "Shikha Jaiswal", gender: "female" , BOY: 2002 ,
     city: "mau" , mobile: 7325452563},
     {name: "Shiva Agarwal", gender: "male" , BOY: 2001 ,
     city: "aligarh" , mobile: 9413416925},
     {name: "Azam Siddiqui", gender: "male" , BOY: 1998 ,
     city: "gola" , mobile: 7912316925},
     {name: "Dhatri Diwedi", gender: "female" , BOY: 2002 ,
     city: "varanasi" , mobile: 9025632586
    }
]

// const users = studentsData.filter( (data) => data.city === "mau" )
//const users = studentsData.filter( (data) => { 
    //return data.city === "mau" && data.BOY >= 2000})

    const users = studentsData.filter( (data) => { 
        return data.city === "gola" && data.mobile >= 6392923455 })
console.log(users);