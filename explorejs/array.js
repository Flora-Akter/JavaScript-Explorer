// see array list---------->
var friendAge=[15,17,14,16];
console.log(friendAge);

// specific position array***
var friendAge=[12,17,32,10]
var floraAge = friendAge[2];
console.log(floraAge);

// list updated......**
var friendAge=[12,17,32,10]
friendAge [2] = 21;
console.log(friendAge);

// array's position check..
var friendAge=[12,15,39,32]
var position = friendAge.indexOf(15);
console.log(position);

// push in array list...
var array=[12,14,16,20];
array.push(21,24);
console.log(array);

// pop in array list...
var weight=[23,29.32,49,53];
weight.pop();
console.log(weight);

// push beginning by using unshift() method..
var fruits=['banana','mango','apple','orange'];
fruits.unshift('lemon','cucumber');
console.log(fruits);

// pop beginning by using shift() method..
var fruits=['banana','lichy','mango','dragon-fruit'];
fruits.shift();
console.log(fruits);

// The slice()method copy of a portion of an array..
var fruits=['banana','grap','cuconut','star-fruit'];
var part=fruits.slice(1,3);
console.log(part);