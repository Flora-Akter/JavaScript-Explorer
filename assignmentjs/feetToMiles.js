// covert feet to mile
function feetToMiles(feet){
    var mile=feet/5280;
    return mile;
}
var feet=6290;
var newMile=feetToMiles(feet);
// newMile=newMile.toFixed(3);
console.log(newMile);

// convert mile to feet
var miles=6748;
function mileToFeet(mile) {
    var feet=miles*5280;
    return feet;
}
console.log(mileToFeet(miles));