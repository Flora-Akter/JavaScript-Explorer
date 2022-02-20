// object destructuring
const person = { Name:'Flora' , age: 21 , id:7822, address:'Azimpur', phone:676766, job:'Nothing To Do', profession:'student'};
const {phone,address,age,Name} = person;
console.log(phone,address,age,Name);

// Array destructuring
const Friends = ['Flora', 'sonia', 'Tithi', 'Raisa', 'Rubaisa' ,'Priom' , 'Ninad'];
const [firstF, secondF, ...othersF] = Friends;
console.log(firstF,secondF, othersF);

const complexObject = {
    Name : 'abc',
    info : {
        address : 'Azimpur',
        leader : 'byOwn'
    }
}
const {leader} = complexObject.info;
console.log(leader);
