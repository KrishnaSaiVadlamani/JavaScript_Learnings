let x = [1,2,3,4]

console.log(x.map((val) => val*2))

console.log(x.filter((val)=> val%2==0))

console.log(x.reduce((acc,val) => acc+val,0))