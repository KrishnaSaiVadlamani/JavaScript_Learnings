function print(val){
    return val ?? "Missing"
}

console.log(print(null))
console.log(print(undefined))
console.log(print(1))
console.log(print("Krishna"))