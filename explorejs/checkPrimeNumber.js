function isPrime(n) {
    for(var i=2;i<n;i++){
        if(n%i==0){
            return "Not a Prime Number"
        }
    }
    return 'Your Number is a Prime Number '
}
var result=isPrime(12);
console.log(result);