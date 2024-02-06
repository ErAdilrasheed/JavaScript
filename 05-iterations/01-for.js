// for

for (let i = 0; i < 10; i++) {
    //console.log(i);
}

for (let i = 1; i <= 10; i++) {
    //console.log(i);
}

for (let i = 1; i <= 10; i++) {
    //console.log(i*2);
}

for (let i = 0; i < 10; i++) {
    //console.log(i*1);
}

for (let i = 1; i <= 10; i++) {
    //console.log(i);
    if (i == 7) {
        //console.log("7 is the best number");
        
    }
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value ${i}`);
    for (let j = 1; j <=10; j++) {
    //console.log(`Inner loop value ${j} , and inner loop ${i}`);
    //console.log(i + ' * ' + j + ' = ' + i*j);    
    }
    
}

let myArray = ["Mohammad" , "Adil" , "Rasheed", "MCA" , "KNIT" , "Sultanpur"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}  


// break and continue


for (let score = 170; score <= 200; score++) {
    if (score == 189) {
        //console.log("Match Tie! Expected to Super Over");
        break;
    }
    //console.log(score);
    
}

for (let score = 170; score <= 200; score++) {
    if (score == 189) {
        console.log("Match Tie! Expected to Super Over");
        continue;
    }
    console.log(score);
    }
