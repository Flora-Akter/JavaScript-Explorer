class Parent{
    constructor() {
        this.middleName = 'Akter';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.middleName;
    }
}

const name1 = new Child('Flora');
const name2 = new Child('Sonia');
console.log(name1);
console.log(name2);
console.log(name1.getFullName());
console.log(name2.getFullName());

