// various function type example

// function doubleIt(num){
//     return num *2;
// }
// const result = doubleIt(5);
// console.log(result);

// example 2
// const doubleIt = function(num){
//     return num * 3;
// }
// const result2 = doubleIt(10);
// console.log(result2);

// example 3 of arrw function writing type 1 (single parameter)
const doubleIt = num => num *2;
const result = doubleIt(10);
console.log(result);

// arrw function writing type 2 (more than one parameter)
const add = (x , y , z) => x + y + z;
const result2 = add(5 , 10 , 20);
console.log(result2);

// arrw function writing type 3 (parameter-less)
const give5 = () => 5;
const result3 = give5();
console.log(result3);

// arrw function writing type 4 (function er vitore kaj beshi thakle)
const doMath = (x,y) => {
   const sum = x + y ;
   const diff = x - y;
   const result4 = sum * diff;
   return result4;
}
const result4 = doMath(7 , 5);
console.log(result4);
