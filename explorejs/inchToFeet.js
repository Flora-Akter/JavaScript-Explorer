// var inch=156;
// var feet=inch/12;
// console.log(feet);  

// by using function
 function inchToFeet(inch) {
   var feet=inch/12;
   return feet;
 }
 var newFeet=inchToFeet(156); //multiple time calling
 console.log(newFeet);
 var anotherFeet=inchToFeet(288);
 console.log(anotherFeet);
 var thirdFeet=inchToFeet(456);
 console.log(thirdFeet);

function getInch(inch) {
    var getFeet=inch/12;
    return getFeet;
    
}
var firstFeet=getInch(488);
firstFeet=firstFeet.toFixed();
console.log(firstFeet);
var secondFeet=getInch(788);
secondFeet=secondFeet.toFixed();
console.log(secondFeet);
