// first way swapping elements
 var a=5;
 var b=7;
 console.log('Before swap: a=', a , 'b =',b);
 temp=a;
 a=b;
 b=temp;
 console.log('After swap: a=', a , 'b =',b);

// Second way swapping elements
x=5;
y=7;
console.log('Before swap: x=', x , 'y =',y);
x=x+y;
y=x-y;
x=x-y;
console.log('After swap: x=', x , 'y =',y);

// Third way to swapping elements
p=5;
q=7;
[p,q]=[q,p];
console.log('After swap: p=', p , 'q =',q);