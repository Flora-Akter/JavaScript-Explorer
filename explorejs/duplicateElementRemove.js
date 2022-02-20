var Name=[1,3,9,6,3,7,2,1];
var uniqueName=[];
for(var i=0;i<Name.length;i++){
    var element=Name[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


// shortway to remove duplicate element
var chars=['A','B','C','D','B','A'];
var uniqueChars=[...new Set(chars)];
console.log(uniqueChars);