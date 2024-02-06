// for of loop

//for (const iterator of object) {   here object does mean java script object 
//}

const numbers = [1,2,3,4,5]
for (const num of numbers) {
    //console.log(num);
}

const knitian = "KNITIAN"
for (const mca of knitian) {
    //console.log(`Every Char is Loved by MCA ${mca}`);
    
}

// Map

const map = new Map()
map.set('IN' , "India")
map.set('USA' ,"United States of America")
map.set('FR' , "France")
map.set('IN' , "India")
//console.log(map);

for (const [key , value] of map) {
    //console.log(key , '--->' , value);
}

const myObject = {
    'Game1': "FreeFire",
    'Game2': "BGMI"
}
for (const [key , value] of myObject) {
    console.log(key , '-->' , value);     // Got Error message object is not iterable, 
}                                         // there is another looping method to iterate object
