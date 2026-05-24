// ********** Use the for of loop ***********

const arr = [2, 4, 6, 8, 10]

for(const num of arr) {
    // console.log(num); 
}


const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(greet);
}


// ********** use of map *************
const map = new Map()
 map.set('IN', "India")
 map.set('USA', "united state of America")
 map.set('Fr', "France")
 map.set('IN', "India")

//  console.log(map);

for(const [key, value] of map) {
    // console.log(key, ':-', value); 
}
 

const myObject = {
    game1 :"NFS",
    game2 : "spiderman"
}

for(const [key, value] of myObject){
    // console.log(key ,":-" , value);
}