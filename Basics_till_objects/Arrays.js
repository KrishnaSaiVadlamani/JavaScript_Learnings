const a = ["Krishna","Sahithi","Ravi","SaiKiran","Yashwanth","Rohith"]
console.log(a.length)

a[100]="Kittu"
console.log(a)  // prints sparse array
console.log(a.length)

console.log(a[102]) // out of bounds gives undefined

a.push("Mahesh")
console.log(a)

const names = ["mahesh","pawan","prabhas"].map((name) => `star ${name}`)
console.log(names)