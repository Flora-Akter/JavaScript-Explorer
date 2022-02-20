function addNumbers(num1,num2) {
    var sum=0;
    for(let i=0; i<arguments.length;i++){
        const num=arguments[i];
        sum=sum+num;
    }
    return sum;
}
var result=addNumbers(3,5,7,2);
console.log(result);

// example 2------------>
function getFullName(firsName, lastName) {
    console.log(arguments);
    let fullName='';
    for(let i=0; i<arguments.length;i++){
        let partName= arguments[i];
        fullName = fullName + ' ' + partName;
    }
    return fullName;
}
const newName=getFullName('sonia', 'Akter', 'Flora', 'Bhuiyan');
console.log(newName);