/* An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. 
 For the arguments Roger and Waters, the function returns ‘RW’. Write this function.*/

const names = (firstname,lastname) => {
    return firstname.charAt(0)+lastname.charAt(0)
}
console.log(names("Krishna","Sai"))