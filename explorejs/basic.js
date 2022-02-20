var price = 12;
console.log(price);
var Name = "Flora";
console.log(Name);
var time = 1.20;
console.log(time);
var FullName = "Flora Akter Sonia"
console.log(FullName);

var numberOfDress = 42;
var number = 8329092;
console.log(numberOfDress);
console.log(number);

var address = "Azimpur"
var distric = "Cumilla"
console.log(address);
console.log(distric);

var redPen = true;
var blackPen = false;
console.log(redPen);
console.log(blackPen);

var promise ="I promise I will work HARD"
console.log(promise.toLowerCase());
console.log(promise.toLocaleUpperCase());
console.log(promise.indexOf("promise"));
console.log(promise.split("promise"));

var number1 = 25;
var number2 = '15.5';
console.log(typeof number2);
console.log(number1 + number2);
number2 =parseFloat(number2);
console.log(number1 + number2);
number2=parseInt(number2);
console.log(number2);

var number1='15.5';
var number2 = '27.8';
number1=+number1;
number2=+number2;
var total = number1+number2;
console.log(total);

var number =12;
console.log(typeof number);

number=''+number;
console.log(typeof number);

// toFixed is a Number method that is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string.
var number1=0.2;
var number2=0.1;
var total=number1+number2;
total= total.toFixed(3);
console.log(total);
console.log(typeof total);

var price1= 25;
var price2=35;
var total=price1+price2;
console.log(total);

price2++;
console.log(price2); 

price1--;
console.log(price1);

var result=price1*price2;
console.log(result);

var result= price1/price2;
result=result.toFixed(3);
console.log(result);

var result=price2%price1;
console.log(result);

var name1 = 'Flora';
var name2 = 'Akter';
console.log(name1+name2);
var final = name1+ ' '+name2;
console.log(final);

var num1 = 5.554;
var result= Math.round(num1);
console.log(result);

var number2=1.2378;
var result=Math.ceil(number2);
console.log(result);

var number1=1.847;
var result=Math.floor(number1);
console.log(result);

var price =Math.random()*100;
var result=Math.round(price);
result=result.toFixed();
console.log(result);



