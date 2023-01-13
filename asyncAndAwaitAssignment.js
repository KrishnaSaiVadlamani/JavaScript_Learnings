async function getdata(uId){
    const email = await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            return resolve("skc@gmail.com");
             }, 4000);
        
    });
    return email;
}

console.log("start");
async function output(){
   let email = await getdata("skc")
   console.log("Email id of the user id is: "+email);    
}

output();
console.log("end");