const normalPerson = {
    firstName : "Flora",
    lastName : "Sonia",
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount,tips,tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
//  normalPerson.chargeBill(150);
//  normalPerson.chargeBill(300);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName : "hero",
    lastName : "Fahima",
    salary : 25000
}

const friendlyPerson = {
    firstName : "Sumon",
    lastName : "Ahmed",
    salary : 12000
}

// HOW TO BIND METHOD USED---------------------------------->
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// // ________________________________________________________________________________

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary)

// HOW TO CALL METHOD USED--------------->
// normalPerson.chargeBill.call(heroPerson,900,100,10);
// normalPerson.chargeBill.call(heroPerson,3000,300,30);
// console.log(heroPerson.salary);

// // ------------------------------------------------
// normalPerson.chargeBill.call(friendlyPerson, 700, 50, 10);
// normalPerson.chargeBill.call(friendlyPerson, 1000, 100, 10);
// console.log(friendlyPerson.salary);

// HOW TO APPLY METHOD USED------------------------->
normalPerson.chargeBill.apply(heroPerson, [3000,300,30]);
normalPerson.chargeBill.apply(heroPerson, [4000,100,20]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [2000,100,10]);
normalPerson.chargeBill.apply(friendlyPerson [400,10,10]);
console.log(friendlyPerson.salary);

