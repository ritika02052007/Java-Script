const username = []

if(username) {
    console.log("got the user");
} else {
    console.log("not found the usee");
}


// ********** falsy values *************
//false , 0 , -0 , BigInt 0n , "", null, undefined, NaN


// ********** truthy values ************
// [], {} , function() {} , "0" , 'false', " "


// ********** Ternary operator ************

const coursePrice = 999
// coursePrice == 999 ? console.log("offer is valid") : console.log("offer is not valid");


// ********** Nullish Coalescing Operator (??) : null undefined
let val;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}


 