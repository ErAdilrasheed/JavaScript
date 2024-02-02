//const newUser = new Object()   // singleton object
const newUser = {}  //Object Literals
//console.log(newUser);

newUser.id = "123abc"
newUser.name = "Yousuf"
newUser.isLoggedIn = true

//console.log(newUser);

const regularUser = {
    email: "adil@knit.com",
    userName:{
        userFullname:{
            firstname:"Adil",
            lastname: "Rasheed"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.userName);
// console.log(regularUser.userName.userFullname);
// console.log(regularUser.userName.userFullname.firstname);

const obj1 = {2: "ad" , 3: "il"}
const obj2 = {4: "rash" , 5: "eed"}
const obj3 = {6: "moha" , 7: "mmad"}
//const obj4 = {obj1 , obj2}
//const obj4 = Object.assign({}, obj1 , obj2 , obj3)
const obj4 = {...obj1 , ...obj2 , ...obj3}
//console.log(obj4);

//data receiving from database in the form of array
const users = [
    {
        id: 1,
        email: "myemail@gmail.com"
    },
    {
        id: 1,
        email: "myemail2@gmail.com"
    },
    {
        id: 1,
        email: "myemail3@gmail.com"
    }   
]
//console.log(users[1]);

// console.log(newUser);
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

//console.log(newUser.hasOwnProperty('isLoggedIn')); // to check that this value exist or not 

const course = {
    courseName: "JavaScript",
    courseInstructor: "AdilRasheed",
    coursePrice: "999"
}
//console.log(course);
//course.courseInstructor // to avoid repeatation use destructure methode

const {courseInstructor: instructor} = course
console.log(courseInstructor);
//console.log(instructor);