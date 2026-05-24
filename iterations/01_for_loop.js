// ********** Using the for loop **********
for (let i = 1 ; i <= 10 ; i++) {
    // console.log(2 * i); 
}


for (let i = 0; i <= 10; i++) {
    const element =  i;
    if (element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
}
// console.log(element);



// ************ Nesting of for loop **********
for (let i = 0 ; i <= 2 ; i++){
    // console.log(`the value of outer loop is ${i}`); 
       for (let j = 0 ; j <=2 ; j++){
        // console.log(`the value of inner loop is ${j}`);
       } 
}


let myArray = ["flash" , "batman", "superman"]
// console.log(myArray);

for (let i = 0; i < myArray.length ; i++) {
    const element = myArray[i];
    // console.log(element);
}



//  ************ break statement *********
for (let i = 0 ; i <= 10 ; i++ ){
    if(i == 5) {
        // console.log("exit the loop");
        break;
    }
    else {
        // console.log(`the current value is ${i}`); 
    }
}



// *********** Continue statement ***********
for (let i = 0 ; i <= 10 ; i++) {
    if (i == 5) {
        continue
    }
    else {
        console.log(`the current value is ${i}`);
        
    }
}


