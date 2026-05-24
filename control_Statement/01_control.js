// ********* Use of if *********

const isUserloggendIn = true
const temperature = 41

if(temperature == 40) {
    // console.log("less than 50");
}  else {
    // console.log("greater than 50");
}

if (temperature) {
    // console.log("user is logged in ");
} else {
    // console.log("user is not logged in");
    
}



const score = 200

if (score >= 200) {
    let power = "fly"
    // console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`);


const balance = 1000

// if(balance > 500 ) console.log("test"),console.log("test2");


// ********** Use of if else if ***********
if(balance < 500){
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if ( balance < 950 ) {
    console.log("less than 950");

} else {
    console.log("less than 1200");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromEmail) {
    console.log("User logged In");
}

