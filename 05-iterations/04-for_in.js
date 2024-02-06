const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    cpp: "c++"
}
for (const key in myObject) {
  //console.log(key);
  //console.log(myObject[key]);  
  //console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["CPP" , "Py" , "Js" , "Java" , "Rb"]
for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' ,"United States of America")
map.set('FR' , "France")
map.set('IN' , "India")
//console.log(map);

for (const key in map) {
    console.log(map[key]);   // iteration not possible in for in loop
}