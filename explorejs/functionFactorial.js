// using function for factorial(iteration way)
function factorial(n) {
    var fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
var result=factorial(50);
console.log(result);
