const numbers = [3,9,5,4,8,12];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const elements = numbers[i];
    const result = elements * elements;
    output.push(result);
}
console.log(output);
// _________________________
const numbers1 = [6,9,5,4,3,22]
const result1 = numbers1.map(function(element){
    return element * element;
})
console.log(result1);
// ====================================
const numbers2 = [4,3,8,74,6,34];
const result2 = numbers2.map(element => element*element);
console.log(result2);

// ====================================
const numbers3 = [4,3,8,7,6,5];
const result3 = numbers3.filter(x => x > 5);
const result4 = numbers3.find(x => x > 5);
console.log(result3);
console.log(result4);