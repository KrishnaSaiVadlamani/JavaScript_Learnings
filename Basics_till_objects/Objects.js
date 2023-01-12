const person = {
    name: "Krishna",
    age : 22,
    details:{
        favouriteFood: "Manchuria",
        favouriteColor: "black" 
    }
}

console.log(person.name)
console.log(person?.age)
console.log(person?.salary) // salary is not defined it gives undefined
console.log(person["name"])
console.log(person?.details?.favouriteColor)
console.log(person.details["favouriteFood"])