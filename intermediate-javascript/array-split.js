const nums = [2,4,6,8,3,5];
const part = nums.slice(2,4);
console.log(part);
console.log(nums);


const num1 = [2,4,6,8,3,5,7];
const removed = num1.splice(0,3);
console.log(removed);
console.log(num1);

const num2 = [2,4,6,8,3,5,7];
const together = num2.join(",");
console.log(together);
console.log(num2);