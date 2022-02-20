class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Rifles';
    }

}
const student1 = new Student(12,'sonia');
const student2 = new Student(22,'Flora'); 
const student3 = new Student(21,'Ishita');
console.log(student1,student2,student3);