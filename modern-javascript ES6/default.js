function add(num1,num2 = 20){
    // first example of default/backup value:
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // second example:
    // num2 = num2 || 20;
    
    return num1 + num2;
}
const total = add(15);
console.log(total);