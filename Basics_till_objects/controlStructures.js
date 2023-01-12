let name = "puppy";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
console.log(name)

let n=5;

for (let i=0;i<5;i++){
    n++;
}
console.log(n)

let action = "draw"

switch (action) {
    case "draw":
      drawIt();
      break;
    case "eat":
      eatIt();
      break;
    default:
      doNothing();
  }

function drawIt(){
    console.log("entered into drawIt")
}

function eatIt(){
    console.log("eatIt!!!!")
}

function doNothing(){
    console.log("idle!!!!")
}