// ******* Creating the Function *********
function sayMyname() {
  console.log("R");
  console.log("I");
  console.log("T");
  console.log("I");
  console.log("K");
  console.log("A");
}

// sayMyname()

// Function add two number
function addnum(num1, num2) {
  return num1 + num2;
}

const sum = addnum(4, 5);
// console.log(sum);
// console.log(addnum(3,4));

function loginUser(username = "ritika") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser());
// console.log(loginUser("prouser"));

// ******** Use the rest operator **********
function calculateCartproduct(...val1) {
  return val1;
}

// console.log(calculateCartproduct(200,300,400,500));

function calculate(val1, val2, ...num1) {
  console.log("first value is :", val1);
  console.log("second value is :", val2);

  return num1;
}
// console.log(calculate(100,200,3000,4000,5000,6000));

// ********* Pass object in the function ********
const user = {
  username: "ritika",
  price: 199,
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and the course price is ${anyobject.price}`,
  );
}

// handleobject(user)

handleobject({
  username: "ram",
  price: 999,
});

// ******* Pass Array in the function *******

const myNewarray = [200, 400, 100, 600];

function returnArray(getArray) {
  return getArray;
  // return getArray[1]
}

// console.log(returnArray(myNewarray));

console.log(returnArray([12, 14, 16, 18, 20]));
