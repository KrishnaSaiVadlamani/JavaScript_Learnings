//Sets are used to store the unique values of any type.

var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('c');
sets.add('a')
for (let element of sets) {
 console.log(element);
}

/////////

var sets = new Set([1,2,3,45,56]);

console.log("set size: "+sets.size);
console.log(sets.has(2));
console.log(sets.has(26));