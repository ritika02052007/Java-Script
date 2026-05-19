const name = "Ritika"
const age = 19

// console.log(name + age + " Value");

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('ritika - sa-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4); // last index is not include
console.log(newString);


const anotherString = gameName.slice(-8 ,-3)
console.log(anotherString);


const newString1 = "   ritika    "
console.log(newString1.trim());


const url = "https://ritika.com/ritika%19saini"

console.log(url.replace('%19' , '-'))

console.log(url.includes('eng'));

console.log(gameName.split('-'));







