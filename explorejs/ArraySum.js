function getArraySum(numbers) {
    var sum=0;
    for(var i=0; i<numbers.length;i++){
        var element=numbers[i];
        sum=sum+element;
    }
    return sum;
}
var numbers=[84,23,52,87,69];
var result=getArraySum(numbers);
console.log('sum of the numbers:', result);
var total=getArraySum([35,98,56,35,87]); //another arraysum
console.log('Total of the numbers:',total);