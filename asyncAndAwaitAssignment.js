async function getdata(uId){
    const email = await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            return "skc@gmail.com";
             }, 4000);
        
    });
    return email;
}

console.log("start");
getdata("skc").then((email) => {
    console.log("Email id of the user id is: "+email);
});
console.log("end");