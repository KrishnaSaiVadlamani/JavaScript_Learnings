// Write a program to demonstrate how a function can be passed as a parameter to another function.

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function operate(operation,a,b){
    return operation(a,b)
}

console.log(operate(add,5,4))
console.log(operate(subtract,8,4))
console.log(operate(multiply,4,5))