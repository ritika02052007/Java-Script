const user = {
    username : "ritika",
    price : 999 ,

    welconmeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        
    }
}

// user.welconmeMessage()
user.username = "ram"
// user.welconmeMessage()

// console.log(this);


// ******* Arrow function *********

const arrowfuction =() => {
    let username = "ritika" 
    console.log(username);
    
}

// arrowfuction() 

const addnumber =( num1 , num2) => {
  return num1 + num2
}

// console.log(addnumber(2,3));
// const sum = addnumber(4,5)
// console.log(sum);


const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(3,4));
