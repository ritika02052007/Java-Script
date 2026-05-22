let a = 300
if(true) {
    let a = 10
     const b = 20
     console.log("INNER : "  ,a);
}

// console.log(a);
// console.log(b);


function one () {
    const username = "ritika"

    function two (){
        const website = "youtube"
        console.log(username);
    }

    console.log(username);
    // console.log(website); give the error
       
   two () 
}

// one()


// ************ INSERTING **************   

console.log(addone(5));

function addone(num) {
    return num +1
}

// addtwo(4)   give the error

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(4));


