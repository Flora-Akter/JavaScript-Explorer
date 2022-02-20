// example 1
var num1=10;
var num2=15;
if(num1>num2){
    console.log("num1 is max");
}
else if(num1==num2){
    console.log("both are eual");
}
else{
    console.log('num2 is max');
}

// example 2------------------>
var num1=10;
var num2=20;
var num3=30;
if(num1>num2){
    if(num1>num3){
        console.log('max is num1');
    }
}
else if(num2>num3){
    console.log('max is num2');
}
else{
    console.log('max is num3');
}

// example 3------------------>

var price1=20;
var price2=550;
var price3=110;
if((price1>price2) && (price1>price3)){
    console.log('price1 is largest');
}
else if((price2>price1) && (price2>price3)){
    console.log('price2 is largest');
}
else{
    console.log("price3 is largest");
}

// example 4------------------------>
var angle1=60;
var angle2=60;
var angle3=60;
var sum=angle1+angle2+angle3;
if(sum==180 && angle1>0 && angle2>0 && angle3>0){
    console.log('Triangle is valid');
}
else{
    console.log('Triangle is not valid');
}

// example 5----------------------->
var num1=39;
var num2=78;
var num3=90;
var max=Math.max(num1,num2,num3);
console.log(max);

// example 6-------------------->
var num1=45;
var num2=32;
var num3=12;
var min=Math.min(num1,num2,num3);
console.log(min);