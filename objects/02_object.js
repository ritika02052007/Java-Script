// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123xyz"
tinderUser.name = "rohan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "someuser@gmail.com",
    fullName : {
        userfullName : {
            firstname : "ritika",
            lastName : "saini"
        }
    }
}


console.log(regularUser);
// console.log(regularUser.fullName.userfullName.firstname);


const obj1 = {1 : "a" ,2 : "b"}
const obj2 = {3 :"c" ,4 : "d"}
const obj3 = {5 : "e", 5 : "f"}

// const obj4 = {obj1, obj2}
// console.log(obj4);
const obj4 = {...obj1 ,...obj2 } 

console.log(obj4);

