class Person{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name
    }
    setName(name){
       this.name=name;
    }
}

let Name = new Person("Jon Snow");
console.log(Name.getName());
Name.setName("Khaleesi");
console.log(Name.getName());