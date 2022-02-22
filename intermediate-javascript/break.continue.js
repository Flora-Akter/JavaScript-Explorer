const nums = [1,2,3,4,5,7,9];
for(let i=0; i<nums.length; i++){

    if(nums[i]>3){
        break;
    }
     console.log(nums[i]);
}

const num1 = [1,-2,3,-4,-5,7,-9];
for(let i=0; i<num1.length; i++){

    if(num1[i]<0){
    continue;
    }
    console.log(num1[i]);
}