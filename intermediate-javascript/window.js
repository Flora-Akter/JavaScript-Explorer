name = "Flora";
function add(num1, num2){
    var result = num1 + num2;
    console.log("inside result", name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
var sum = add(12,23);
console.log(sum);
console.log("outside result", name);