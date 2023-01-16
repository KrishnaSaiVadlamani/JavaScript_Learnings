// Map holds key-value pairs
var map = new Map();
map.set('name', 'Krishna');
map.set('name', 'Kittu');
map.set(1, 'number one');
map.set(NaN, 'No value');


console.log(map.get('name'));   // Kittu. Note Krishna is replaced by Kittu.
console.log(map.get(1)); // number one
console.log(map.get(NaN)); // No value


//


console.log("//////////////////////");

var map = new Map();
map.set(1,"Krishna");
map.set(2,"Kittu");

console.log("map size: "+map.size);

map.keys();
map.values();

for(var [key,value] of map){
    console.log([key+" "+value]);
    // console.log(map.values);
}