const promiseOne = new Promise(function(resolve , reject){
//Do Async task
// DB call , network call , cryptography etc
setTimeout(function(){
    //console.log('Async task is completed')
    resolve()    // resolve is a method and has several parameters , and sets something behind the scene
},2000)
})            // promise created

promiseOne.then(function(){          // .then has direct relation with resolve
    //console.log('promise consumed');   // .then has a callback
})            // promise consumed

new Promise(function(resolve , reject){
setTimeout(function(){
    //console.log('Async task 2 created');
    resolve()
},2000)
}).then(function(){
    //console.log('Async task 2 consumed');
})

const promiseThree = new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log('Data Received');
        resolve({username: "Adil", email: "adil@gmaill.com"})
    }, 2000)
})
promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve ,reject){
setTimeout(function(){
    let error = true   // if set true then display Error! something went wrong
    if (!error) {
        resolve({username:"Adil Rasheed" , password: "4474"})
    } else{
        reject('Error! Something went wrong')
    }
},2000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> {
    console.log('Either problem is resolved or rejected');
})


const promiseFive = new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error = true   
        if (!error) {
            resolve({username:"Adil Rasheed" , password: "4474"})
        } else{
            reject('Error! Javascript is not executed')
        }
    },2000)
    })

    async function consumeFive (){
        try {
            const response = await promiseFive
            console.log(response); 
        } catch (error) {
         console.log(error);   
        }
    }

    consumeFive()


    // async function getAllUsers(){
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     console.log(data);  
    // } catch (error) {
    //   console.log("E:" , error);  
    // }
    // }
    // getAllUsers()

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

    // do more practices