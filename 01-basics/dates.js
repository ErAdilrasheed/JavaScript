// dates

//let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON());

/*let myCreatedDate = new Date(2024 , 0 , 22)
let myCreatedDate = new Date(2024 , 0 , 22 , 6 , 8 , 9)
let myCreatedDate = new Date("2024-01-22")
let myCreatedDate = new Date("01-22-2024")*/
//console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate.getMonth() +1);
//console.log(newDate.getDay());
//`${newDate.getDay()} and the month is ${newDate.getMonth()}`
newDate.toLocaleString('default' ,{
    weekday: "long"
})