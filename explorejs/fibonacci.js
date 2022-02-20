// using iteration fibonacci in for loop
var fibo=[0,1];
for(var i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);

// using iteration fibonacci in function
function fibonacci(n) {
    var fibo=[0,1];
    for(var i=2;i<=n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
var result=fibonacci(12);
console.log(result);