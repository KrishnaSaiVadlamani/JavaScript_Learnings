// One of the powerful aspects of JavaScript is its asynchronicity. 
// This means that many functions that may be long-running or time-consuming can return a Promise and not block execution.

// async function returns a special kind of promise called 'async function promise'

function sum(...nums) {
    return nums.reduce((agg, val) => agg + val, 0)
}

// sum(1, 2, 3)                    // Promise {<fulfilled>: 6}
//   .then(res => console.log(res)) // prints 6

             // prints 6
async function a(){
    let res = await sum(1, 2, 3)    // Promise {<fulfilled>: 6} -await-> 6
    console.log(res)  
}
a()