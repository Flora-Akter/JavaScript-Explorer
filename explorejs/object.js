var student={id:121, phone:823,name:'abir'};
var student2={id:153,phone:368,name:'flora'};

// single property showed
var phoneNo1=student.phone;
var phoneNo2=student2['phone'];
console.log(phoneNo2);
console.log(phoneNo1);


// property updated
student.phone=878;
console.log(student);
student2['phone']=999;
console.log(student2);


// add new property
student2.quize = '12';
console.log(student2);