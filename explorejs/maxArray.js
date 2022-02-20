// iteration way
var marks=[45,89,76,23,92,24];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var elements=marks[i];
    if(elements>max){
        max=elements;
    }
}
console.log("Highest value is:", max);

// another way
var maxArray = [65,98,23,67,87];
console.log(Math.max(...maxArray));


// min value way
var minArray = [65,28,23,67,87,10];
console.log(Math.min(...minArray));

