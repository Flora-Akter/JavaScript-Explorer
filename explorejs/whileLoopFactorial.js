// using while loop(iteration way)
function factorial(n) {
    var i=1;
    var fact=1;
    while(i<=n){
        fact=fact*i;
        i++;
    }
    return fact;
}
var result=factorial(7);
console.log(result);