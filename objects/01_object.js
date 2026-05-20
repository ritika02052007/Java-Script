// singleton object
// object.create

// ++++++++++++ object literals ++++++++++
const jsUser = {
    name :" ritika",
    age : 19,
    location : "Alwar",
    email : "ritika@google.com",
    isloggedIn : "flase",
    lastLoggedDays : ["Monday" , "saturday"]
}

// console.log(jsUser);
// console.log(jsUser.age);
// console.log(jsUser["name"]);

const mysym = Symbol('key1')

const jsUser2 = {
    name : "ritika",
    [mysym] : "mykey",
    "full-name" : "ritika saini",
    age :19,
    location :" Alwar",
    email : "ritika@github.com"
}

console.log(jsUser2);
console.log(jsUser2["full-name"]);
console.log(jsUser2[mysym]);
// console.log(jsUser2.mysym);   // print the undefined value


jsUser2.email = "ritika@insta.com"
// console.log(jsUser2.email);
// Object.freeze(jsUser2)

jsUser2.email = "ritika@linkdin.com"
// console.log(jsUser2.email);







