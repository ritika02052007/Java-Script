const myarr = [1,23,43,56]
const myheroes = ["shaktiman", "thor", "naagraj"]

const myarr2 = new Array(1,2,3,4,5,6)

// console.log(myarr);
// console.log(myarr2);
// console.log(myheroes);
// console.log(myarr2[2]);


// ******** Arrays Methods ********
myarr.push(6)
myarr.push(7)
myarr.pop()
// console.log(myarr);

myarr.unshift(9)
myarr.shift()
// console.log(myarr);


// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));


const newArr = myarr.join()
// console.log(newArr);

// console.log(myarr);
// console.log(newArr);


// ********* Slice And Splice ***********

console.log("A" , myarr);

const myn1 = myarr.slice(2,7)
console.log(myarr.slice(2,7));
console.log(myn1);


const myn2 = myarr.splice(1,6)
console.log(myn2);
console.log(myarr);











