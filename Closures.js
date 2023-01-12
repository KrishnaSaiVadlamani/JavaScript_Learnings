// with global counter

let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  console.log("local "+counter)
}

// Call add() 3times
add();
console.log("global "+counter)
add();
console.log("global "+counter)
add();
console.log("global "+counter)


// only with local counter

function add1() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  // Call add() 3 times
  console.log(add1());
  console.log(add1());
  console.log(add1());


// nested functions 
// javascript closures 
  const add2 = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
console.log("closures: "+add2());
console.log("closures: "+add2());
console.log("closures: "+add2());