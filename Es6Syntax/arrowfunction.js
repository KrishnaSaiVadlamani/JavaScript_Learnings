// old syntax

function helloOld(){
    console.log("Hello Old!!!!")
}

// new syntax

var helloNew = () => {
    console.log("Hello New!!!!")
}

helloOld();
helloNew();

// with parameters

var addition = (a,b) => {
    return a+b;
}
console.log(addition(4,7))

// default parameters

var multiplication = (a,b=10) =>{
    return a*b;
}

console.log(multiplication(24));
console.log(multiplication(41,52));