function add(a,b){
    const total = a+b
    return total
}
console.log(add(5,6))


function avg(firstValue, secondValue, thirdValue = 0) {
    return (firstValue + secondValue + thirdValue) / 3;
  }
  
console.log(avg(1, 2));


// anonymous function 
const average = function (...args) { 
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  };

console.log(average(1,2,3,4,5))


// inner functions

function parentFunc() {
    const a = 1;
  
    function nestedFunc() {
      const b = 4; // parentFunc can't use this
      return a + b;
    }
    return nestedFunc();
  }
  console.log(parentFunc())