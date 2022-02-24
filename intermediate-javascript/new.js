class Person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person("Hero", "person", 23999);
console.log(heroPerson);

const friendlyPerson = new Person("Hero", "person2", 25999);
console.log(friendlyPerson);