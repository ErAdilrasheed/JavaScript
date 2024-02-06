const coding = ["Js" , "py" , "rb" , "cpp" , "java"]
coding.forEach( function(item){
    //console.log(item);
} )

//coding.forEach( (val) => {    //call back function dont't write function name
//console.log(val);
//} )

function printMe(item){
    //console.log(item);
}
//coding.forEach(printMe)

coding.forEach((item, index , arr) =>{
    //console.log(item , index , arr);
})

const myCoding = [
    {
    languageName: "JavaScript",
    extensionName: "js"
},
{
    languageName: "Python",
    extensionName: "py"
},
{
    languageName: "C++",
    extensionName: "cpp"
}
]
myCoding.forEach( (item) => {
    console.log(item.extensionName);
} )