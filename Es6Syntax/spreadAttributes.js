// Spread attributes help to spread the expression as the name suggests. In simple words, it converts a list of elements to an array and vice versa.

let add = (...arr) =>{
   console.log(arr);

   let sum = 0;

   for (let value of arr){
    sum+=value;
   }
   console.log(sum);
}

add(10,20,30,40,50)


let arr = [10, 20, 60];
console.log(Math.max(arr)); // Shows error. Doesn't accept an array.
console.log(Math.max(...arr))