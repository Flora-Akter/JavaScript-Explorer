// use of three dots to spread the notation
const age1 = [12, 23, 21, 15];
const age2 = [87,45, 26,56];
const age3 = [67,45,23,90];
//  const allAges = age1.concat(age2).concat([4]).concat(age3);
const allAges = [...age1 , ...age2, 5, ...age3];
console.log(allAges);

// example 2
// const business = 470;
// const minister = 679;
// const sochib = 390;
// const maximum = Math.max(business,minister,sochib);
// console.log(maximum);
const  totalArray = [470 , 679, 390,789];
const maximum1 = Math.max(...totalArray);
console.log(maximum1);